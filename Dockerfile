FROM node:10
WORKDIR /opt/app
COPY package.json /opt/app


RUN npm install
COPY . /opt/app

RUN npm run build
COPY . /opt/app

CMD node server.js

EXPOSE 8080
