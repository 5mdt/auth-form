const http = require('http'); // eslint-disable-line no-undef

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(80, () => {
  console.log('Server is listening on port 80');
});
