import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const PLATFORMS = [
  { id: "tiktok", icon: "play_circle", label: "TikTok", labelEs: "TikTok" },
  { id: "instagram", icon: "photo_camera", label: "Instagram", labelEs: "Instagram" },
  { id: "facebook", icon: "facebook", label: "Facebook", labelEs: "Facebook" },
  { id: "twitter", icon: "tag", label: "X / Twitter", labelEs: "X / Twitter" },
];

export default function VideoDownloader() {
  const { lang } = useLanguage();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const detectPlatform = (link) => {
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

  const handleFileDownload = async () => {
    if (!result?.id) return;
    setDownloading(true);
    try {
      const res = await fetch(`/api/download/${result.id}`);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${result.title || "video"}.${result.ext || "mp4"}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch {
      setError(lang === "es" ? "Error al descargar el archivo" : "Failed to download file");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto">
      <h1 className="flex items-center gap-x-2 text-lg font-medium mb-3">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        {lang === "es" ? "Descargador de Videos" : "Video Downloader"}
      </h1>

      <p className="text-sm text-gray-600 mb-4">
        {lang === "es"
          ? "Descarga videos de TikTok, Instagram, Facebook y X."
          : "Download videos from TikTok, Instagram, Facebook and X."}
      </p>

      <div className="bg-gray-50 rounded-xl p-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {lang === "es" ? "Plataformas soportadas" : "Supported Platforms"}
          </label>
          <div className="grid grid-cols-4 gap-2">
            {PLATFORMS.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center gap-1 py-2 px-1 bg-white rounded-lg border border-gray-200"
              >
                <span className="material-symbols-rounded text-xl text-gray-600">
                  {p.icon}
                </span>
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
                disabled={downloading}
                className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                  downloading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                <span className="material-symbols-rounded text-base">
                  {downloading ? "progress_activity" : "download"}
                </span>
                {downloading
                  ? lang === "es" ? "Descargando..." : "Downloading..."
                  : lang === "es" ? "Descargar Video" : "Download Video"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
