import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const FacebookIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <title>Facebook</title>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <title>Instagram</title>
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
  </svg>
);

const XIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <title>X</title>
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <title>YouTube</title>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PLATFORMS = [
  { id: "youtube", Icon: YouTubeIcon, label: "YouTube", labelEs: "YouTube" },
  { id: "tiktok", Icon: TikTokIcon, label: "TikTok", labelEs: "TikTok" },
  { id: "instagram", Icon: InstagramIcon, label: "Instagram", labelEs: "Instagram" },
  { id: "facebook", Icon: FacebookIcon, label: "Facebook", labelEs: "Facebook" },
  { id: "twitter", Icon: XIcon, label: "X / Twitter", labelEs: "X / Twitter" },
];

export default function VideoDownloader() {
  const { lang } = useLanguage();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const detectPlatform = (link) => {
    if (link.includes("youtube.com") || link.includes("youtu.be")) return "youtube";
    if (link.includes("tiktok.com")) return "tiktok";
    if (link.includes("instagram.com")) return "instagram";
    if (link.includes("facebook.com") || link.includes("fb.watch")) return "facebook";
    if (link.includes("twitter.com") || link.includes("x.com")) return "twitter";
    return null;
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError(lang === "es" ? "Ingresa un enlace válido" : "Enter a valid URL");
      return;
    }

    const platform = detectPlatform(url.trim());
    if (!platform) {
      setError(lang === "es" ? "Plataforma no soportada" : "Unsupported platform");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || (lang === "es" ? "Error al descargar" : "Download failed"));
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError("");
    } catch {
      setError(lang === "es" ? "No se pudo leer el portapapeles" : "Could not read clipboard");
    }
  };

  const handleFileDownload = () => {
    if (!result?.id) return;
    const a = document.createElement("a");
    a.href = `/api/download/${result.id}`;
    a.download = `${result.title || "video"}.${result.ext || "mp4"}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto">
      <h1 className="flex items-center gap-x-2 text-lg font-medium mb-3">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        {lang === "es" ? "Descargador de Videos" : "Video Downloader"}
      </h1>

      <p className="text-sm text-gray-600 mb-4">
        {lang === "es"
          ? "Descarga videos de YouTube (Shorts, Lives, etc.), TikTok, Instagram, Facebook y X."
          : "Download videos from YouTube (Shorts, Lives, etc.), TikTok, Instagram, Facebook and X."}
      </p>

      <div className="bg-gray-50 rounded-xl p-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {lang === "es" ? "Plataformas soportadas" : "Supported Platforms"}
          </label>
          <div className="grid grid-cols-5 gap-2">
            {PLATFORMS.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center gap-1 py-2 px-1 bg-white rounded-lg border border-gray-200"
              >
                <p.Icon />
                <span className="text-xs text-gray-500">
                  {lang === "es" ? p.labelEs : p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {lang === "es" ? "Enlace del video" : "Video URL"}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
              placeholder="https://..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button
              type="button"
              onClick={handlePaste}
              className="px-3 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
              title={lang === "es" ? "Pegar" : "Paste"}
            >
              <span className="material-symbols-rounded text-base">content_paste</span>
            </button>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">{error}</p>
        )}

        <button
          type="button"
          onClick={handleDownload}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all ${
            loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-rounded animate-spin">progress_activity</span>
              {lang === "es" ? "Procesando..." : "Processing..."}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-rounded text-base">download</span>
              {lang === "es" ? "Descargar" : "Download"}
            </span>
          )}
        </button>

        {result && (
          <div className="pt-2 space-y-3">
            {result.title && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {lang === "es" ? "Título" : "Title"}
                </label>
                <p className="text-sm text-gray-800 bg-white border border-gray-200 rounded-lg p-3">
                  {result.title}
                </p>
              </div>
            )}

            {result.thumbnail && (
              <div className="flex justify-center">
                <img
                  src={result.thumbnail}
                  alt="Thumbnail"
                  className="rounded-lg max-w-full h-auto border border-gray-200"
                />
              </div>
            )}

            {result.id && (
              <button
                type="button"
                onClick={handleFileDownload}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-all"
              >
                <span className="material-symbols-rounded text-base">download</span>
                {lang === "es" ? "Descargar Video" : "Download Video"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
