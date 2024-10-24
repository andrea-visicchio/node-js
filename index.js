// importiamo il modulo http
const http = require('http');

const server = http.createServer( (req, res) => {

    //console.log(req.url);
    
    /* 
    l'oggeto req (richiesta del client) ci permette di accedere alla proprietà url, che ci restituisce ciò che è scritto della barra dell'indirizzo del browser, dopo l'indirizzo del server che nel nostro caso è http://localhost:3000

    Altro esempio: se sulla barra dell'indirzzo è scritto:
    https://ideeinsieme.it/corsi_nuovi, la proprietà url restituirebbe /corsi_nuovi
    */
    if (  req.url === '/' ) {

        // il metodo .writeHead() ci consente di scrivere il contentuo dell'header della risposta HTTP proveniente dal server web. content-type che è valorizzato con text/html è una delle voci dell'intestazione della risposta del server, e serve al browser per capire come interpretare il corpo della risposta


        res.writeHead(200, {'content-type' : 'text/css'});
        // il metodo write ci consente di inserire un contenuto di tipo HTML nella pagina che verrà visualizzata sul browser quando verrà digita la url corrispondente
        res.write('<h1>Home page</h1>');

        // il metodo end(), non avrà più bisogno di ricevere come parametro un messaggio, ma è necessario invocarlo per chiudere la risposta del server
        res.end();

    } else if (  req.url === '/contatti'  ) {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h2>Contatti</h2><p>lorem ipsum</p>');
        res.end();
    } else if (  req.url === '/prodotti'  ) {
        
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h2>Prodotti</h2><p>Acquista i nostri prosotti</p>');
        res.end();

    } else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h3>Errore 404 - La risorsa richiesta non esiste o è stata rimossa</h3>');
        res.end();
    }

    //res.end("Benvenuti all'interno del mio server Node");

});

server.listen(3000, () => {

    console.log("Il server è stato avviato correttamente");
    
});

/* 
Protocollo HTTP

é un "sistema" che si basa su una RICHIESTA da parte del client e su una RISPSOTA da parte del server

Il client invia una richiesta al server sotto forma di URL, con alcune informazioni aggiuntive
esempio di url:
https://www.google.com/search?q=meteo&rlz=1C1RXQR_enIT1116IT1116&oq=meteo&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgwIARAjGCcYgAQYigUyEAgCEAAYkgMYgAQYuAQYigUyDQgDEAAYkgMYgAQYigUyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyBwgGEAAYgAQyDQgHEAAYgwEYsQMYgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQoxMzYzNGowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8

IL server elabora la richiesta, esegue le operazioni necessarie e invia una risposta al client.
QUesta risposta contiene:
- un codice di stato
- una intestazione
- il corpo della risposta

IL protoccolo HTTP possiede dei metodi che un Client può eseguire su un server
I metodi sono

GET: recupera una risorsa sul server: in pratica richiedo al server di inviarmi il codice HTML corrispondente alla risorsa che ho richiesto

POST: inserisce una risosra nel server: quando compiliamo un modulo su una pagina web e al termine della compilazione clicchiamo sul pulsante che ci permetterà di inviare i dati compilati, stiamo eseguondo il netodo POST, cioè stiamo registrando sul server dei dati

PUT: Aggiorna una risorsa esistente nel server: immaginiamo di modificare dei dati relativi al nostro account presente su amazon, modificando il nostro nome

DELETE: elimina una risorsa sul server: eliminiamo un dato dal nostro account google, opppure eliminiamo un file presente sul server

*/