FROM node:24-alpine

# Pin yt-dlp to a known version so image builds are reproducible.
# Bump this ARG (and rebuild) to update the downloader.
ARG YTDLP_VERSION=2026.10.26

RUN apk add --no-cache python3 py3-pip ffmpeg && \
    pip install --no-cache-dir --break-system-packages --root-user-action=ignore \
      "yt-dlp==${YTDLP_VERSION}"

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && npm prune --omit=dev

ENV NODE_ENV=production

EXPOSE 3002

CMD ["node", "server.js"]
