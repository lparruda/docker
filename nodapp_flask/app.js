const http = require('http');

const hostname = '0.0.0.0';
// const port = 3000;
const port = process.env.PORT;
const version = process.env.VERSION;

const server = http.createServer((req, res) => {
  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ and version ${version}`);
});

process.on('SIGINT', function() {
    process.exit();
});
