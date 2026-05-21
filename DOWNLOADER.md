# Video Downloader Setup

## Local Development

### 1. Install yt-dlp

**macOS:**
```bash
brew install yt-dlp
```

**Linux:**
```bash
sudo apt install yt-dlp
# or
pip install yt-dlp
```

**Windows:**
```bash
winget install yt-dlp
# or
pip install yt-dlp
```

### 2. Verify installation
```bash
yt-dlp --version
```

### 3. Run the app
```bash
npm run dev:all
```

## Docker

The Dockerfile already includes yt-dlp. Just run:
```bash
docker compose up --build
```

## Supported Platforms

- TikTok
- Instagram (Reels, Posts, Stories)
- Facebook (Videos, Reels)
- X / Twitter

## Notes

- Some platforms may require cookies for authentication-protected content
- Rate limits may apply depending on the platform
- Downloaded links are temporary and expire after 5 minutes
