FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"

# VERSION GRAPEJS
ARG GRAPESJS_VERSION=0.14.50
ARG GRAPESJS_MJML_MODULE_VERSION=0.0.31
# Config NPM INIT du projet NodeJS
ARG NOM_DU_PROJET="pegasus-mjml-editor"
ARG EMAIL_AUTEUR_DU_PROJET="jean.baptiste.lasselle@gmail.com"
ARG NOM_AUTEUR_DU_PROJET="Jean-Baptiste Lasselle"
ARG SOCIALIZED_AUTEUR_DU_PROJET="https://github.com/Jean-Baptiste-Lasselle"
ARG LICENCE_DU_PROJET="GNU LGPLv3 wtf"
ARG VERSION_INITIALE_DU_PROJET_PACKAGE_JSON=0.2.0
ARG MOTS_CLES_SEMANTIQUE_PROJET="mjml, editor, email, template"
# le nom du fichier de documentation précisant les 'known bugs', bref il s'agit de traçabilité du traitment des bugs
ARG BUGS_REFERENCE_FILE=THIS_RELESASES_BUGSLIST.md

ARG NOM_DU_FICHIER_POINT_D_ENTREE=server.js
ENV NOM_DU_FICHIER_POINT_D_ENTREE=$NOM_DU_FICHIER_POINT_D_ENTREE




RUN apk update && apk add git tree unzip

RUN echo "checking all npm init config options "
RUN npm help 7 config
# Set up rapide du projet NodeJS
RUN npm set init.name "$NOM_DU_PROJET"
RUN npm set init.author.email "$EMAIL_AUTEUR_DU_PROJET"
RUN npm set init.author.name "$NOM_AUTEUR_DU_PROJET"
RUN npm set init.author.url "$SOCIALIZED_AUTEUR_DU_PROJET"
RUN npm set init.license "$LICENCE_DU_PROJET"
RUN npm set init.version="$VERSION_INITIALE_DU_PROJET_PACKAGE_JSON"


RUN mkdir -p /grapejs_mjml_module_repo
WORKDIR /grapejs_mjml_module_repo
RUN wget https://github.com/artf/grapesjs-mjml/archive/v$GRAPESJS_MJML_MODULE_VERSION.zip
RUN unzip v$GRAPESJS_MJML_MODULE_VERSION.zip || exit 1
RUN ls -allh



RUN mkdir -p /grapejs_repo
WORKDIR /grapejs_repo/
RUN wget https://github.com/artf/grapesjs/archive/v$GRAPESJS_VERSION.zip
RUN unzip v$GRAPESJS_VERSION.zip || exit 1
RUN ls -allh

RUN mkdir -p /mjml_server/public/grapes
WORKDIR /mjml_server
ADD $NOM_DU_FICHIER_POINT_D_ENTREE .
# RUN git clone https://github.com/artf/grapesjs-mjml   
#     https://github.com/artf/grapesjs-mjml  >>>  que j'ai importé dans https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml
# RUN git clone https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml .

# =>> ces fichiers sont les fichiers chargés par le index.html
ADD index.html .
RUN cp ./index.html  ./public/grapes
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/grapes.min.js ./public/grapes
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/css/grapes.min.css ./public/grapes
RUN cp /grapejs_mjml_module_repo/grapesjs-mjml-$GRAPESJS_MJML_MODULE_VERSION/dist/grapesjs-mjml.min.js ./public
RUN echo " juste avant le build, vérification du code source nu : "
RUN tree -allh
# - et c'est parti,initialisation du projet
RUN npm init --yes
RUN echo " juste avant le build, vérification du package.json généré : "
RUN cat package.json
RUN echo " Le build : "
# RUN npm install grapesjs-mjml --save
RUN npm i grapesjs-mjml
RUN echo " juste après installation de [grapesjs-mjml], où est le fichier [grapesjs-mjml.min.js] ? "
RUN tree -allh
# J'installe aussi express pour servir un site internet statique
RUN npm install express --save
RUN mkdir -p ./fonts
RUN npm install font-awesome --save
RUN echo "vérification du contenu de ./node_modules/font-awesome : "
RUN ls -allh ./node_modules/font-awesome
RUN cp -Rf ./node_modules/font-awesome/css/* ./fonts
RUN cp -Rf ./node_modules/font-awesome/fonts/* ./fonts



EXPOSE 3000

# https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["node", "$NOM_DU_FICHIER_POINT_D_ENTREE"]
