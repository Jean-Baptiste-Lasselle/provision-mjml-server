FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"


# https://github.com/mjmlio/mjml#installation
RUN apk update && apk add git yarn

RUN yarn --version

RUN mkdir /mjml_server
WORKDIR /mjml_server

# https://github.com/ghostanza/mjml-editor
RUN git clone https://github.com/ghostanza/mjml-editor .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start", "--port", "3000"]
