const http = require('http'); // il modulo fs serve a leggere e scrivere file
const fs = require('fs'); // il modulo path per gestire le cartelle
const path = require('path');

const port = 3000;

/* 
Creo una funzione che si chiama serverFile
Tale funzione servira a leggere e restituitre un file al client
La funzione prevede che gli vengano passati 3 parametri:

- filePath: il percorso del file da leggere
- contentType: è il tipo di contenuto del file (es. text/html)
- response: sarà la risposta del server
*/
const serverFile = (filePath, contentType, response) => {

  /* 
  Attraverso l'oggeto fs, utilizzo il metodo readFIle, per leggere il contenuto del file specificato dal parametro passato alla funzione serverFile, ovvero filePath
  La funzione di callBack prevista dal metodo readFile riceve da questo, due parametri che sono:
  - err: conterrà eventuali errori che si potrebbero verificare durante la lettura del file
  - content: il contenuto del file letto
  */
  fs.readFile(filePath, (err, content) => {

    if (err) {

      /* 
      Se l'erre è ENOENT (file non trovato), imposta l'intestazione della risposta HTTP con lo status code paria 404, e invia un messagio al client (browser) che è quello che leggiamo come parametro passato al metodo end dell'oggetto response.

      Se si verifica un altro errore, che potrebbe essere un errore nel codice del file che il client a richiesto, viene restituito uno status CODE uguale a 500
      */
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
const server = http.createServer( (req, res) => {

        /* 
        Una risorsa sul web è sempre formata da 3 parti
        - il protocollo utilizzato
        - l'host (l'indirizzo del server)
        - la url (tecnicamente tutto ciò che è scritto dopo l'indirzzo dell'host, compreso lo /)
        */
        if (req.url === '/prodotti') {

          /* 
          utilizzo il metodo .join() che mi mette a disposione l'oggeto path, tale metodo ci permette di generare una stringa che rappresenta il percorso di un file
          in generale il metodo join() può ricevere "infiniti" parametri
          */
          const filePath = path.join(__dirname, 'public', 'html', 'prodotti.html');

          console.log(filePath);
          console.log(__dirname);
          
        
          serverFile(filePath, 'text/html', res);

        } else {

          res.writeHead(404);
          res.end('404 - Risorsa non trovata');

        }

      } // fine del blocco di codice della funzione di call back eseguita dopo le operazioni che createServer ha eseguito
);

// Avvia il server
server.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
