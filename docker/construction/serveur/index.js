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

const server = http.createServer((req, res) => {
  console.log(" pegasus + La requête " + req.url + " vient d'être reçue   ");
  var fluxDeLectureDeLaReponse = sgf.createdReadStream(__dirName + "index.html", 'utf-8')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  fluxDeLectureDeLaReponse.pipe(res);
});

server.listen(numeroPortMonAppli, hostname, () => {
  console.log(`MJML editor server is now running at http://${hostname}:${numeroPortMonAppli}/`);
});
