FROM ghcr.io/puppeteer/puppeteer:24.3.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /app

COPY package*.json ./backend
RUN npm run ci
COPY . .
CMD ["node", "backend", "app.js"]