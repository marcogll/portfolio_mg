FROM node:20-alpine

RUN apk add --no-cache python3 pip

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN pip install yt-dlp --break-system-packages

COPY . .
RUN npm run build

EXPOSE 3002

CMD ["node", "server.js"]