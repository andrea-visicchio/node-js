const http = require('http');
const fs = require('fs');
const path = require('path');

const porta = 3000; 

function serverFile(filePath, contentType, response) {

    fs.readFile(filePath, (errore, contenuto_file) => {

        if (errore) {
            // il seguente blocco di codice verrà eseguito SOLO SE il metodo readFile restituisce un errore
            if (errore.code === 'ENOENT' ) {
                response.writeHead(404, {'Content-Type' : 'text/plain'})
                response.end('Errore 404 - File non trovato')
            } else {
                response.writeHead(500);
                response.end('Errore interno del server, contattare lo sviluppatore');
            }


        } else {

            response.writeHead(200, {'Content-Type' :  contentType});
            response.end(contenuto_file)


        }


    } // chiusura del blocco di codice della funzione di callBack


); // chiusura del metodo readFile


}; // la chiusura del blocco di codice della funzione serverFile


// creazione del server

const mio_Server = http.createServer( (richiesta, risposta) => {

            if (richiesta.url === '/about') {

                const percorso_file = path.join(__dirname, 'public', 'html_page', 'contatti.html');

                serverFile(percorso_file, 'text/html', risposta);

            } else if (richiesta.url === '/') {

                const percorso_file = path.join(__dirname, 'public', 'html_page', 'home.html');
                serverFile(percorso_file, 'text/html', risposta);

            } else if (richiesta.url === '/i-nostri-progetti') {

                const percorso_file = path.join(__dirname, 'public', 'html_page', 'progetti.html');
                serverFile(percorso_file, 'text/html', risposta);

            } else {
                risposta.writeHead(404);
                risposta.end('Pagina non disposnibile');
            }

        } //fine della callback legata a mio_Server

); // fine dell'oggetto mio_server

mio_Server.listen(porta, () => {
    console.log("Il tuo server è partito");
    
})