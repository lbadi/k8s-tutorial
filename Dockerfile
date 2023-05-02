FROM node:12

EXPOSE 5000

RUN mkdir emojis
WORKDIR emojis

RUN mkdir client
COPY ./client/package.json client/package.json
COPY ./client/public/ client/public
COPY ./client/src/ client/src
COPY ./emojiList.json emojiList.json
COPY ./package.json package.json
COPY ./server.js server.js

WORKDIR client
RUN npm i
RUN npm run build
WORKDIR ..

RUN npm i

ENTRYPOINT node server.js
