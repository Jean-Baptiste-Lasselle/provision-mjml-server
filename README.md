# provision-mjml-server

Une recette de provision d'un éidteur MJML, dans le browser.
Parti de https://github.com/mjmlio/mjml#installation, j'ai constaté : 
* qu'il s'avère que ce composant est certainement destiné à être utilisé en ligne d commande.
* que ce que je cherchais à avoir, c'est un Web editor MJML, et j'en ai trouvé quelques-un : 

* mon quasi préféré : https://github.com/artf/grapesjs-mjml
* https://github.com/sm0g/mjml-editor   celui ci me paraît un des candidats les plus sérieux, il fait appel aux concepts serverless, et il est publié avec une présentation PDF `Serverless MJML Editor`, dont j'ai gardé dans ce repo une partie : https://github.com/Jean-Baptiste-Lasselle/provision-mjml-server/raw/master/documentations/images/Serverless%20MJML%20editor.pdf

> 
> Les autres (des petits joueurs) : 
> 
> * https://github.com/ghostanza/mjml-editor
> * https://github.com/hubidu/email-editor
> * https://github.com/danielweinmann/react-email-editor
> 

# Utilisation

Exécutez les instructions ci-dessous, le serveur écouteras alors sur le port `5698`, et servira une application web en mode serveur statique (Many thanks `@Express.js`) : 

```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/provision-mjml-server/
mkdir mjml.io
cd mjml.io
git clone "$URI_DE_CE_REPO" . 
chmod +x ./operations.sh
./operations.sh

```

# Cycle IAAC


_(Infrastructure Adressed As Code)_

```bash
git pull && docker-compose down --rmi all && git pull && docker-compose down --rmi all && docker-compose up -d --force-recreate --build && docker logs -f mjml.kytes.io
```

# Notes usine logicielle

## npm, git, npm registries

Est-il possible de définir l'URL du repository git versionnant le code source de l'application, à l'aide de la commande `npm init --yes`, après avoir exécuté préalablement une commande de configuration de la forme `npm set init.name $NOM_CHOISIT_POUR_LE_PROJET` (qui détermine le nom du projet inscrit dans le `package.json` généré ) ?

Si l'on exécute :

```bash
npm set init.name "bernard"
npm set init.version "0.2.0"


npm init --yes
```
On génère un fichier `package.json` contenant  : 

```json
{
  "name": "bernard",
  /*
    [...] Il peut y avoir bien d'autres éléments de configuration dans
        les fichiers package.json que vosu rencontrez chaque jour
   */
   "version": "0.2.0"
}

```

D'autre part, en cherchant surle web, on peut trouver un `package.json` un peu plus fleurit : 


```json
{
  "name": "bernard",
  "version": "0.0.0",
  "description": "Some NPM test.",
  "main": "index.js",
  "scripts": {
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/wolfeidau/npmtest.git"
  },
  "keywords": [
    "npm"
  ],
  "author": "Mark Wolfe <mark@wolfe.id.au>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/wolfeidau/npmtest/issues"
  },
  "homepage": "https://github.com/wolfeidau/npmtest"
}

```

Es-ce que je peux générer les paramètres de configuration suivants dès la phase `npm init` (à la création d'un nouveau projet)?  : 
* `description`
* `bugs.url`
* `repository.type`
* `repository.url`
* `homepage`


Avec l'exécution des commandes  : 

```bash
export NOM_DU_FICHIER_POINT_D_ENTREE=omega.js
export MOTS_CLES_SEMANTIQUE_PROJET="mjml, editor, email, template"
export LICENCE_DU_PROJET=cc
export NOM_DU_FICHIER_POINT_D_ENTREE=ccc

# projet
npm set init.name "bernard"
npm set init.version "0.0.0"
npm set init.license "$LICENCE_DU_PROJET"
npm set init.description "Un excellent projet de traitement omnicanal des données de géolocalisation"
npm set init.main "$NOM_DU_FICHIER_POINT_D_ENTREE"
# versionning projet
npm set init.repository.type "git"
npm set init.repository.url "https://github.com/Jean-Baptiste-Lasselle/the-bernad-project"
npm set init.keywords "mjml, editor, email, template"
# Auteur du projet
npm set init.author.email "$EMAIL_AUTEUR_DU_PROJET"
npm set init.author.name "$NOM_AUTEUR_DU_PROJET"
npm set init.author.url "$SOCIALIZED_AUTEUR_DU_PROJET"

# génération du package.json
npm init --yes
```

### Licensing des projets `NodeJS/npm`

* Pour configurer la licence d'un projet avec une commande `npm init.licence "$NOM_LICENCE"`, `npm` nous laisse toute liberté : il est possible de choisir n'importe quelle chaîne de caractères. On a alors deux situations possibles : 
  * Soit le projet est un produit que l'on souahite ouvrir à l'open-spource : alors, soit on créée un nouveau type de licence (cas rarissime, mais n'excluons rien), soit on doit utiliser une des licences open-sources existantes. Pour chacune de ces licences, il existe un standard de code à utiliser avec `npm init.license "$NOM_LICENCE"`  Pour un grand nombre des licences existantes, vous trouverez : 
  * La valeur de `$NOM_LICENCE`, à utiliser avec `npm init.license "$NOM_LICENCE"`, dans le fichier [`./documentations/npm/licenses/stdcodes/README.md`](./documentations/npm/licenses/stdcodes)
  * Dans le fichier [`./documentations/npm/licenses/README.md`](./documentations/npm/licenses), on trouve un tableau. Ce tableau contient une ligne par licence, et une colonne de ce tableau permet de préciser, pour chaque licence, un lien HTTP, vers le fichier content le texte de la licence correspondante. Les fichiers de licences référencés dans ce tableau, font référence aux fichiers de licences du repository `git` que j'utilsie comme référence des licences, pour tous les projets, dans tous les languages de programmation.
  * Pour résumer, ce repo est une référence de base pour tous les projets `nodejs/npm` : par exemple mon usine logicielle viendra chercher dans ce repo, la liste des codes de licence possibles pour un projet `npm/nodejs`, pour la proposer à l'utilisateur de l'usine logicelle (qa, architectes, développeurs, etc...) 
  * Et le repo https://github.com/Jean-Baptiste-Lasselle/factory-licenses-reference contient les fichiers de licence. La plus récente release de ce repo, fournit la version vigueur dans l'usine logicielle, pour tous les fichiers de licences.
  
  


_Quelques morceaux choisis trouvés sur  internet, sur la question_

> If you add the line  "private": true to your package.json file it will prevent you from accidentally submitting the package to the public repository (not that its easy to do by accident).
> For proprietary projects, I use “LicenseRef-LICENSE” and then create a “LICENSE” file in the project that contains “Copyright © 2017 Acme Inc <name@example.com>”


ARG NOM_DU_FICHIER_POINT_D_ENTREE=server.js
ENV NOM_DU_FICHIER_POINT_D_ENTREE=$NOM_DU_FICHIER_POINT_D_ENTREE
