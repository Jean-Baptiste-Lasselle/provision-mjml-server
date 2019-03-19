FROM node:8.15.1-alpine

MAINTAINER Jean-Baptiste Lasselle
LABEL maintainer="jean.baptiste.lasselle@gmail.com"

# VERSION GRAPEJS
ARG GRAPESJS_VERSION=0.14.50


# Config NPM INIT du projet NodeJS
ARG NOM_DU_PROJET="Pegasus' MJML Editor"
ARG EMAIL_AUTEUR_DU_PROJET="jean.baptiste.lasselle@gmail.com"
ARG NOM_AUTEUR_DU_PROJET="Jean-Baptiste Lasselle"
ARG LICENCE_DU_PROJET="GNU LGPLv3 wtf"
ARG VERSION_INITIALE_DU_PROJET_PACKAGE_JSON=0.2.0
ARG MOTS_CLES_SEMANTIQUE_PROJET="mjml, editor, email, template"
ARG NOM_DU_FICHIER_POINT_D_ENTREE=index.js
# le nom du fichier de coueemntation précisant les bugs, bref il s'agti de traçabilité du traitment des bugs
ARG BUGS_REFERENCE_FILE=THIS_RELESASES_BUGSLIST.md


RUN apk update && apk add git tree unzip


# Set up rapide du projet NodeJS
RUN npm set init.name "$NOM_DU_PROJET"
RUN npm set init.author.email "$EMAIL_AUTEUR_DU_PROJET"
RUN npm set init.author.name "$NOM_AUTEUR_DU_PROJET"
RUN npm set init.license "$LICENCE_DU_PROJET"
RUN npm set init.version="$VERSION_INITIALE_DU_PROJET_PACKAGE_JSON"



RUN mkdir /grapejs_repo
WORKDIR /grapejs_repo
RUN wget https://github.com/artf/grapesjs/archive/v$GRAPESJS_VERSION.zip
RUN unzip v$GRAPESJS_VERSION.zip || exit 1
RUN ls -allh

RUN mkdir /mjml_server
WORKDIR /mjml_server

# RUN git clone https://github.com/artf/grapesjs-mjml   
#     https://github.com/artf/grapesjs-mjml  >>>  que j'ai importé dans https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml
# RUN git clone https://github.com/Jean-Baptiste-Lasselle/grapesjs-mjml .

# =>> ces fichiers déterminent donc les chemins relatifs de fichiers référecnés dans le index.html
ADD index.html .
ADD index.js .
RUN mkdir -p grapesjs/
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/grapes.min.js grapesjs/
RUN cp /grapejs_repo/grapesjs-$GRAPESJS_VERSION/dist/css/grapes.min.css grapesjs/

RUN echo " juste avant le build, vérification du code source nu : "
RUN tree -allh
# - et c'est parti,initialisation du projet
RUN npm init --yes
RUN echo " juste avant le build, vérification du package.json généré : "
RUN cat package.json
RUN echo " Le build : "
RUN npm install grapesjs-mjml --save


EXPOSE 3000

# CMD ["npm", "run", "start", "--port", "3000"]
CMD ["node", "index.js", "--host", "0.0.0.0"]
