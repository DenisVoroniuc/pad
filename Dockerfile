FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

CMD ["node", "build/users/app.js"]
