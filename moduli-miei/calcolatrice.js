const mio_modulo = require("./mio_modulo");

function somma(a, b){
    let risultato = a + b;
    console.log(`La somma tra ${a} e ${b} è pari a ${risultato}`);
    
}

function divisione(a, b) {
    let risultato = a / b;
    console.log(`La divisione tra ${a} e ${b} è pari a ${risultato}`);
}
/* 
in un modulo, con l'istruzione module.exports, verrà esportata l'ultima funzione indicata
*/
// module.exports = somma;
// module.exports = divisione;

/* 
se dobbiamo esportare più di una funzione presente nel modulo, dobbiamo cerare un oggetto che coterra le funzioni da esportare
questo oggetto conterrà delle prorpietà le quali avranno un nome (una chiave) e il loro valore coinciderà con il nome della funzione
*/

module.exports = {
    funzione_somma : somma,
    funzione_divisione : divisione
}