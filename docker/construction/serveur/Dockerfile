FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"

# VERSION GRAPEJS
ARG GRAPESJS_VERSION=0.14.50


# Config NPM INIT du projet NodeJS
ARG NOM_DU_PROJET="pegasus-mjml-editor"
ARG EMAIL_AUTEUR_DU_PROJET="jean.baptiste.lasselle@gmail.com"
ARG NOM_AUTEUR_DU_PROJET="Jean-Baptiste Lasselle"
ARG LICENCE_DU_PROJET="GNU LGPLv3 wtf"
ARG VERSION_INITIALE_DU_PROJET_PACKAGE_JSON=0.2.0
ARG MOTS_CLES_SEMANTIQUE_PROJET="mjml, editor, email, template"
ARG NOM_DU_FICHIER_POINT_D_ENTREE=server.js
# le nom du fichier de coueemntation précisant les bugs, bref il s'agti de traçabilité du traitment des bugs
ARG BUGS_REFERENCE_FILE=THIS_RELESASES_BUGSLIST.md


RUN apk update && apk add git tree unzip


# Set up rapide du projet NodeJS
RUN npm set init.name "$NOM_DU_PROJET"
RUN npm set init.author.email "$EMAIL_AUTEUR_DU_PROJET"
RUN npm set init.author.name "$NOM_AUTEUR_DU_PROJET"
RUN npm set init.license "$LICENCE_DU_PROJET"
RUN npm set init.version="$VERSION_INITIALE_DU_PROJET_PACKAGE_JSON"



RUN mkdir -p /grapejs_repo
WORKDIR /grapejs_repo/
RUN wget https://github.com/artf/grapesjs/archive/v$GRAPESJS_VERSION.zip
RUN unzip v$GRAPESJS_VERSION.zip || exit 1
RUN ls -allh

RUN mkdir -p /mjml_server/public/grapes
WORKDIR /grapejs_repo
ADD $NOM_DU_FICHIER_POINT_D_ENTREE .
# RUN git clone https://github.com/artf/grapesjs-mjml   
#     https://github.com/artf/grapesjs-mjml  >>>  que j'ai importé dans https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml
# RUN git clone https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml .

# =>> ces fichiers déterminent donc les chemins relatifs de fichiers référencés dans le index.html
ADD index.html
RUN mv index.html  ./public/grapes
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/grapes.min.js ./public/grapes
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/css/grapes.min.css ./public/grapes

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


EXPOSE 3000

# https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["node", "server.js"]
