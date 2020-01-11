# install dependencies
# build react-app into build/ folder

FROM node:10-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_ENVIRONMENT

RUN npm run build

# move build folder to nginx
# run nginx to server static files

FROM nginx:stable

COPY --from=build /usr/src/app/build/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf