// importiamo il modulo http
const http = require('http');

const server = http.createServer(  (req, res) => {

    res.end("Benvenuti nel nostro primo sito con NODE");

}  );

server.listen(3000, () => {

    console.log("Server avviato");
    
});