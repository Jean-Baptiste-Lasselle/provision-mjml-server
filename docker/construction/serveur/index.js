/**
 * Just do it : https://nodejs.org/en/docs/guides/getting-started-guide/
 *
 **/

const http = require('http');
const sgf = require('fs');
const path = require('path');

/**
 * Just do it : https://nodejs.org/en/docs/guides/getting-started-guide/
 *  Il faut donc démarrer l'application avec : 
 *            $ PORT=4589 NODE_ENV=development node index.js
 * 
 * Pour un Dockerfile, idéalement la partie ENTRYPOINT ["PORT", "=", "4589", "NODE_ENV", "=", "development"] 
 * 
 **/

// const hostname = '127.0.0.1';
const hostname = process.env.HOST;
const numeroPortMonAppli = process.env.PORT;
const projectDir= process.env.PWD;
const repProjet = path.dirname(".");
const server = http.createServer((req, res) => {
  // console.log(" pegasus + a pris pour répertoire projet : " + projectDir + " pour travailler en NodeJS   ");
  console.log(" pegasus + La requête " + req.url + " vient d'être reçue   ");
  console.log(" Verification : path=" + path.dirname("."));
  
  var fluxDeLectureDeLaReponse = null;
  // req.url === "/"
  if (new String(req.url).valueOf() == new String("/").valueOf()) {
       console.log(" pegasus + La requête demandée est la RACINE du site, je vais donc renvoyer ./index.html");
       fluxDeLectureDeLaReponse = sgf.createReadStream("./index.html", 'utf-8');
  } else {
       console.log(" pegasus + La requête demandée n'est PAS la RACINE du site, je vais donc renvoyer " + req.url);
       fluxDeLectureDeLaReponse = sgf.createReadStream(req.url, 'utf-8');
  }
  
  
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('charset', 'utf-8');
  
  // res.end('Hello World\n');
  fluxDeLectureDeLaReponse.pipe(res);
});

server.listen(numeroPortMonAppli, hostname, () => {
  console.log(`MJML editor server is now running at http://${hostname}:${numeroPortMonAppli}/`);
});
