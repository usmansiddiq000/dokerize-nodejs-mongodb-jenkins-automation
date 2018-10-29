FROM node:8


WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY . .

CMD node index.js

EXPOSE 3000

