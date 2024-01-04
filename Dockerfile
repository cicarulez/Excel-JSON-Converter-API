FROM node:16-slim

WORKDIR /work

COPY . .

RUN  npm i && npm run build

CMD node ./dist/index.js
