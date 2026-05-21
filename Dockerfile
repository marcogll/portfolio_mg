FROM node:20-alpine

RUN apk add --no-cache python3 py3-pip ffmpeg && \
    pip install yt-dlp --break-system-packages --root-user-action=ignore

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3002

CMD ["node", "server.js"]