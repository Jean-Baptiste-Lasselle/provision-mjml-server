FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"


# https://github.com/mjmlio/mjml#installation
RUN apk update && apk add git yarn

RUN yarn --version

RUN mkdir /mjml_server
WORKDIR /mjml_server

# https://github.com/Siepomaga/mjml-server
RUN git clone https://github.com/mjmlio/mjml.git .
RUN yarn install
RUN yarn build
# RUN yarn dist


EXPOSE 3000

CMD ["yarn", "start", "--host", "0.0.0.0"]
