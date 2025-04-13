FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install pm2 -g
COPY .. .
