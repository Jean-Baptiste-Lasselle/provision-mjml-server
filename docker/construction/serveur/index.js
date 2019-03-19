/**
 * Just do it : https://nodejs.org/en/docs/guides/getting-started-guide/
 *
 **/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`MJML editor server is now running at http://${hostname}:${port}/`);
});
