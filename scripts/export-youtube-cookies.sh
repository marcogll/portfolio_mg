#!/bin/bash
set -e

BROWSER="${1:-safari}"
OUTPUT="${2:-youtube_cookies.txt}"

echo "Exportando cookies de YouTube desde: $BROWSER"
echo "El archivo se guardará en: $OUTPUT"
echo ""

if ! command -v yt-dlp &> /dev/null; then
    echo "Error: yt-dlp no está instalado. Instálalo con:"
    echo "  brew install yt-dlp"
    exit 1
fi

yt-dlp --cookies-from-browser "$BROWSER" --cookies "$OUTPUT" --no-download "https://www.youtube.com"

echo ""
echo "Cookies exportadas correctamente a: $OUTPUT"
echo "Sube este archivo a la raíz del proyecto en tu servidor."
