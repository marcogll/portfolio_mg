import express from 'express';
import { readFileSync, readdirSync, statSync, existsSync, unlinkSync, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { exec, execSync } from 'child_process';
import { promisify } from 'util';
import { randomUUID } from 'crypto';
import { mkdirSync } from 'fs';

const execAsync = promisify(exec);

const __dirname = dirname(fileURLToPath(import.meta.url));
const quotes = JSON.parse(readFileSync(join(__dirname, 'src/info/quotes.json'), 'utf-8'));
const scriptsDirectory = join(__dirname, 'scripts');
const scriptAccessUser = process.env.SCRIPTS_BASIC_USER;
const scriptAccessPassword = process.env.SCRIPTS_BASIC_PASSWORD;
const contactRateWindowMs = 15 * 60 * 1000;
const contactRateLimitMax = 5;
const contactAttempts = new Map();
const allowedContactFields = ['name', 'email', 'phone', 'business', 'subject', 'message', '_lang', '_timestamp', 'website'];

const tempDir = join(__dirname, 'temp_downloads');
if (!existsSync(tempDir)) {
  mkdirSync(tempDir, { recursive: true });
}

const YTDLP_PATH = process.env.YTDLP_PATH || 'yt-dlp';

try {
  execSync(`${YTDLP_PATH} --version`, { stdio: 'ignore' });
  console.log(`yt-dlp initialized: ${execSync(`${YTDLP_PATH} --version`).toString().trim()}`);
} catch (err) {
  console.error('yt-dlp not found or failed to initialize:', err.message);
}

const activeDownloads = new Map();
const DOWNLOAD_CLEANUP_MS = 10 * 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [id, data] of activeDownloads.entries()) {
    if (now - data.createdAt > DOWNLOAD_CLEANUP_MS) {
      try {
        if (existsSync(data.file)) {
          unlinkSync(data.file);
        }
      } catch {}
      activeDownloads.delete(id);
    }
  }
}, 60000).unref();

const app = express();
const PORT = process.env.PORT || 3002;

function setSecurityHeaders(req, res, next) {
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "script-src 'self'",
    "connect-src 'self'",
    "img-src 'self' data: https:",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "form-action 'self'"
  ].join('; '));
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
}

function getRequestIp(req) {
  return req.ip || req.socket?.remoteAddress || 'unknown';
}

function normalizeContactPayload(body) {
  const source = body && typeof body === 'object' && !Array.isArray(body) ? body : {};
  const normalized = {};

  for (const field of allowedContactFields) {
    const value = source[field];
    normalized[field] = typeof value === 'string' ? value.trim() : '';
  }

  return normalized;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactPayload(payload) {
  if (payload.website) {
    return 'Invalid request';
  }

  if (!payload.name || payload.name.length > 80) {
    return 'Invalid name';
  }

  if (!payload.email || payload.email.length > 120 || !isValidEmail(payload.email)) {
    return 'Invalid email';
  }

  if (payload.phone.length > 30) {
    return 'Invalid phone';
  }

  if (payload.business.length > 120) {
    return 'Invalid business';
  }

  if (!payload.subject || payload.subject.length > 120) {
    return 'Invalid subject';
  }

  if (!payload.message || payload.message.length > 2000) {
    return 'Invalid message';
  }

  if (payload._lang && !['en', 'es'].includes(payload._lang)) {
    return 'Invalid language';
  }

  if (payload._timestamp && Number.isNaN(Date.parse(payload._timestamp))) {
    return 'Invalid timestamp';
  }

  return null;
}

function enforceContactRateLimit(req, res, next) {
  const now = Date.now();
  const ip = getRequestIp(req);
  const attempts = (contactAttempts.get(ip) || []).filter((timestamp) => now - timestamp < contactRateWindowMs);

  if (attempts.length >= contactRateLimitMax) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  attempts.push(now);
  contactAttempts.set(ip, attempts);
  next();
}

function requireScriptAccess(req, res, next) {
  if (!scriptAccessUser || !scriptAccessPassword) {
    return res.status(404).end();
  }

  const authorization = req.headers.authorization;

  if (!authorization?.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected Scripts"');
    return res.status(401).json({ error: 'Authentication required' });
  }

  let user = '';
  let password = '';

  try {
    [user = '', password = ''] = Buffer.from(authorization.slice(6), 'base64')
      .toString('utf-8')
      .split(':');
  } catch {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected Scripts"');
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  if (user !== scriptAccessUser || password !== scriptAccessPassword) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected Scripts"');
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  next();
}

setInterval(() => {
  const now = Date.now();

  for (const [ip, attempts] of contactAttempts.entries()) {
    const freshAttempts = attempts.filter((timestamp) => now - timestamp < contactRateWindowMs);

    if (freshAttempts.length === 0) {
      contactAttempts.delete(ip);
      continue;
    }

    contactAttempts.set(ip, freshAttempts);
  }
}, contactRateWindowMs).unref();

app.use(setSecurityHeaders);
app.use(express.json({ limit: '16kb', type: 'application/json' }));
app.use(express.static(join(__dirname, 'dist')));
app.use('/api/scripts/files', requireScriptAccess, express.static(scriptsDirectory));

app.get('/api/scripts', requireScriptAccess, (req, res) => {
  res.sendFile(join(__dirname, 'dist/index.html'));
});

app.get('/api/scripts-manifest', requireScriptAccess, (req, res) => {
  const scripts = readdirSync(scriptsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const filePath = join(scriptsDirectory, entry.name);
      const stats = statSync(filePath);
      const extension = entry.name.includes('.')
        ? entry.name.split('.').pop().toLowerCase()
        : '';

      return {
        name: entry.name,
        extension,
        size: stats.size,
        modifiedAt: stats.mtime.toISOString(),
        url: `/api/scripts/files/${encodeURIComponent(entry.name)}`
      };
    })
    .sort((left, right) => right.modifiedAt.localeCompare(left.modifiedAt));

  res.json({ scripts });
});

app.get('/api/time', (req, res) => {
  const timezone = process.env.TIMEZONE || 'UTC';
  const now = new Date();

  const options = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const dateTimeStr = formatter.format(now);
  const [datePart, timePart] = dateTimeStr.split(', ');

  res.json({
    utc_iso: now.toISOString(),
    unixtime: Math.floor(now.getTime() / 1000),
    datetime_human: `${datePart}, ${timePart}`,
    timezone: timezone
  });
});

app.get('/api/quote', (req, res) => {
  const phrases = quotes.phrases;
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  res.json({ phrase: randomPhrase });
});

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== 'string' || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const supportedDomains = ['tiktok.com', 'instagram.com', 'facebook.com', 'fb.watch', 'twitter.com', 'x.com'];
  const isSupported = supportedDomains.some(domain => url.includes(domain));
  if (!isSupported) {
    return res.status(400).json({ error: 'Unsupported platform' });
  }

  const downloadId = randomUUID();
  const tempFile = join(tempDir, `${downloadId}`);

  try {
    const { stdout: metaJson, stderr: metaStderr } = await execAsync(
      `${YTDLP_PATH} --dump-json --no-download "${url}"`,
      { timeout: 30000, maxBuffer: 20 * 1024 * 1024 }
    );

    let info;
    try {
      info = JSON.parse(metaJson.trim());
    } catch {
      console.error('Failed to parse metadata:', metaJson.substring(0, 500));
    }

    const { stdout: downloadOutput, stderr: downloadStderr } = await execAsync(
      `${YTDLP_PATH} --no-playlist -f "best[ext=mp4]/best" -o "${tempFile}" --merge-output-format mp4 "${url}"`,
      { timeout: 120000, maxBuffer: 10 * 1024 * 1024 }
    );

    const files = readdirSync(tempDir).filter(f => f.startsWith(downloadId));
    const videoFile = files.find(f => !f.endsWith('.json') && !f.endsWith('.part') && !f.endsWith('.ytdl'));

    if (!videoFile) {
      console.error('Download files found:', files);
      console.error('Download stderr:', downloadStderr?.substring(0, 1000));
      for (const f of files) {
        try { unlinkSync(join(tempDir, f)); } catch {}
      }
      return res.status(500).json({ error: 'Download failed - no video file created' });
    }

    const ext = extname(videoFile).slice(1) || 'mp4';
    const fullPath = join(tempDir, videoFile);

    activeDownloads.set(downloadId, {
      file: fullPath,
      title: info?.title || 'Video',
      thumbnail: info?.thumbnail || null,
      duration: info?.duration_string || null,
      ext,
      createdAt: Date.now(),
    });

    res.json({
      id: downloadId,
      title: info?.title || 'Video',
      thumbnail: info?.thumbnail || null,
      duration: info?.duration_string || null,
      ext,
    });
  } catch (err) {
    console.error('Download error:', err.message);
    console.error('Download stderr:', err.stderr?.substring(0, 1000));
    try {
      const files = readdirSync(tempDir).filter(f => f.startsWith(downloadId));
      for (const f of files) {
        try { unlinkSync(join(tempDir, f)); } catch {}
      }
    } catch {}
    res.status(500).json({ error: 'Failed to process video' });
  }
});

app.get('/api/download/:id', (req, res) => {
  const { id } = req.params;
  const download = activeDownloads.get(id);

  if (!download || !existsSync(download.file)) {
    activeDownloads.delete(id);
    return res.status(404).json({ error: 'Download expired or not found' });
  }

  const stat = statSync(download.file);
  const mimeType = download.ext === 'mp4' ? 'video/mp4' : download.ext === 'webm' ? 'video/webm' : 'application/octet-stream';

  res.setHeader('Content-Type', mimeType);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(download.title)}.${download.ext}"`);

  const stream = createReadStream(download.file);

  stream.on('end', () => {
    try { unlinkSync(download.file); } catch {}
    activeDownloads.delete(id);
  });

  stream.on('error', () => {
    try { unlinkSync(download.file); } catch {}
    activeDownloads.delete(id);
  });

  stream.pipe(res);
});

app.get('/api/download/:id/meta', (req, res) => {
  const { id } = req.params;
  const download = activeDownloads.get(id);

  if (!download) {
    return res.status(404).json({ error: 'Not found' });
  }

  res.json({
    title: download.title,
    thumbnail: download.thumbnail,
    duration: download.duration,
    ext: download.ext,
    url: `/api/download/${id}`,
  });
});

app.post('/api/contact', enforceContactRateLimit, async (req, res) => {
  const webhookUrl = process.env.CONTACT_WEBHOOK;
  const contentType = req.headers['content-type'] || '';
  
  if (!webhookUrl) {
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Unsupported content type' });
  }

  const payload = normalizeContactPayload(req.body);
  const validationError = validateContactPayload(payload);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!webhookResponse.ok) {
      return res.status(502).json({ error: 'Webhook request failed' });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send' });
  }
});

app.use((error, req, res, next) => {
  if (error?.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Payload too large' });
  }

  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }

  return next(error);
});

app.use((req, res) => {
  res.sendFile(join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
