FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"


# https://github.com/mjmlio/mjml#installation
RUN apk update && apk add git yarn


RUN mkdir /mjml_server
WORKDIR /mjml_server

# https://github.com/Siepomaga/mjml-server
RUN  npm install -g mjml
RUN  npm install mjml --save


RUN mjml-server -h


EXPOSE 1410

CMD ["mjml-server", "-p", "1410", "--hostname", "0.0.0.0"]
