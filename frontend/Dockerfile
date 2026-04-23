ARG NODE_VERSION=22.22.2

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./
RUN npm install 

COPY . .
COPY ./src ./src
RUN npm run build

CMD ["npm", "run", "dev"]
EXPOSE 1105
