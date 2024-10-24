function mia_funzione() {
    console.log("Ciao, vi saluto dal modulo di Andrea");
    
}

function funzione2() {
    console.log("Sono la funzione 2");
    
}
function funzione3() {
    console.log("Sono la funzione 3");
    
}

function moltiplicazione(a, b) {
    let ris_moltiplicazione = a * b;
    console.log(`Il risultato di ${a} x ${b} = ${ris_moltiplicazione}`);
    
}
// di seguito viene indicato qual'è la fuznione a cui possiamo accedere da un file esterno (il quale avrà importato il modulo a cui la funzione appartiene)

// se tento di esportare le funzione del modulo tutte con l'istruzione module.exports, verrà messa adisposzione solo l'ultima esportazione
/* module.exports = mia_funzione;
module.exports = funzione2;
module.exports = funzione3; */

// nel caso dovessimo esportare più di una funzione, il module.exports, dovrà esportare un oggetto, formato da funzioni

module.exports = {
    rif_mia_funzione: mia_funzione,
    rif_funzione2 : funzione2,
    rif_funzione3 : funzione3,
    rif_moltiplicazione : moltiplicazione

}
