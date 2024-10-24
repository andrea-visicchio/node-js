const http = require('http'); // il modulo fs serve a leggere e scrivere file
const fs = require('fs'); // il modulo path per gestire le cartelle
const path = require('path');
const port = 3000;

const serveFile = (filePath, contentType, response) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
      } else {
        response.writeHead(500);
        response.end('Server Error');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content); // Qui passiamo il contenuto del file
    }
  });
};

// Crea il server
const server = http.createServer((req, res) => {
  if (req.url === '/prodotti') {
    const filePath = path.join(__dirname, 'public', 'html', 'prodotti.html');
    serveFile(filePath, 'text/html', res);
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

// Avvia il server
server.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
