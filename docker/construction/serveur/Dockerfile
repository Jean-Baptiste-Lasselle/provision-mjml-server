FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"


# https://github.com/mjmlio/mjml#installation
RUN apk update && apk add git yarn

# Installation de Yarn
RUN yarn --version

RUN mkdir /mjml_server
WORKDIR /mjml_server

# https://github.com/Siepomaga/mjml-server
RUN  npm install -g mjml-server

RUN mjml-server -h


EXPOSE 1410

CMD ["mjml-server", "-p", "1410", "--hostname", "0.0.0.0"]
