# provision-mjml-server
Une recette de provision de https://github.com/mjmlio/mjml#installation
Il s'avère que ce composant est certainement destiné à être utilisé en ligne d commande.
Ce que je cherche à avoir, c'est un Web editor MJML, t j'en ai trouvé un : 

* https://github.com/sm0g/mjml-editor
* https://github.com/sm0g/mjml-editor
* https://github.com/hubidu/email-editor



```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/provision-mjml-server/
mkdir mjml.io
cd mjml.io
git clone "$URI_DE_CE_REPO" . 
chmod +x ./operations.sh
./operations.sh
```
* Dans `./operations.sh`

```bash
docker-compose up -d --force-recreate --build 
```

* Cycle IAAC

```bash
git pull && docker-compose down --rmi all && docker-compose up -d --force-recreate --build 
docker logs -f mjml_service
```

