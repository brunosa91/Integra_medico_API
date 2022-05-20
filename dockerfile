FROM node:16-slim

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install





COPY . .

EXPOSE 4000

CMD npm start