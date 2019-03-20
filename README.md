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

