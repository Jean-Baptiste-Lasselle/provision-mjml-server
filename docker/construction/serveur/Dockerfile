FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"


# https://github.com/mjmlio/mjml#installation
RUN apk update && apk add git yarn

RUN yarn --version

RUN mkdir /mjml_server
WORKDIR /mjml_server

# https://github.com/Siepomaga/mjml-server
RUN git clone https://github.com/hubidu/email-editor .
RUN npm install
# https://github.com/nodegit/nodegit/issues/1361#issuecomment-367168875  (cas d'un conteneur Docker)
RUN apk --no-cache -q add build-base libgit2-dev
RUN npm install nodegit
RUN ls -allh /usr/lib64/libcurl*
RUN ln -s /usr/lib64/libcurl.so.4 /usr/lib64/libcurl-gnutls.so.4
# next build
RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "start", "--port", "3000"]
