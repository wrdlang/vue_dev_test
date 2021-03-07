FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN  npm install
RUN npm install @vue/cli -g
EXPOSE 8080
CMD ["npm", "run", "serve"]