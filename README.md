# provision-mjml-server
Une recette de provision de https://github.com/mjmlio/mjml#installation



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

