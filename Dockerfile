FROM node:20-slim

WORKDIR /work

COPY . .

RUN  npm i && npm run build

CMD node ./dist/index.js
