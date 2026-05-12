ARG NODE_VERSION=24.14.1

FROM node:${NODE_VERSION}-alpine AS base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./
RUN npm install 

COPY . .
COPY ./src ./src
RUN npm run build

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
EXPOSE 3000
