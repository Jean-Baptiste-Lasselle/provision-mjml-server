/**
 * Just do it : https://nodejs.org/en/docs/guides/getting-started-guide/
 *
 **/

const http = require('http');
const sgf = require('fs');

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
const repProjet = process.env.PWD;
const server = http.createServer((req, res) => {
  // console.log(" pegasus + a pris pour répertoire projet : " + projectDir + " pour travailler en NodeJS   ");
  console.log(" pegasus + La requête " + req.url + " vient d'être reçue   ");
  
  var fluxDeLectureDeLaReponse = null;
  if (req.url = "/") {
       fluxDeLectureDeLaReponse = sgf.createReadStream("./index.html", 'utf-8');
  } else {
       fluxDeLectureDeLaReponse = sgf.createReadStream(req.url, 'utf-8');
  }
  // var fluxDeLectureDeLaReponse = sgf.createReadStream(req.url if ()+ "./index.html", 'utf-8');
  var fluxDeLectureDeLaReponse = sgf.createReadStream(req.url + "/index.html", 'utf-8');
  
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('charset', 'utf-8');
  
  // res.end('Hello World\n');
  fluxDeLectureDeLaReponse.pipe(res);
});

server.listen(numeroPortMonAppli, hostname, () => {
  console.log(`MJML editor server is now running at http://${hostname}:${numeroPortMonAppli}/`);
});
