const miaFunzione = require('./moduli-miei/mio_modulo.js');

const calcolatrice = require('./moduli-miei/calcolatrice.js');

console.log("Ciao, sono la prima app in node JS");
let x = 1;
let y = 2;
let somma = x + y;

console.log(somma);

// nell'ambiente node js, non è disponibile l'oggetto document, non è disponibile la funzione alert(), non è disponibile la fuznione prompt()

// Variabili globale  che node JS ci mette a disposzione

// __dirname è una varibaile GLOBALE dove viene memorizzato il percorso della cartella corrente

console.log(  __dirname  );

// __filename è una varbaile GLOBALE che memorizza il percorso del file di lavoro corrente

console.log(  __filename  );

// siamo in grado di creare delle varibili GLOBALI, essendo tali, queste potranno essere utilizzate in qualunque parte del codice del file

global.mia_variabile = 'Ciao';

// MODULI
/* 
è un blocco di codice RIUTILIZZABILE, un modulo può contere funzioni, oggetti, varibili, tutto il necessario per poter eseguire operazioni.
IL motivo per cui dobbiamo usare i moduli è perchè questo ci aiuta a organizzare meglio il codice e gesstirlo in parti più piccole
*/

/* 
Creiamo un nostro modulo, che coinciderà con un altro file con estensione .js
all'ionterno di questo file creiamo una funzione
il file creato lo vogliamo utilizzare all'interno del file app.js, in maniera tale che la funzione create nel modulo possa esser esata da qualunque file js che richiam il modulo.

il modulo che viene creato potrà contenere, per esempio una o più funzioni
node js ci consente, all'interno del modulo, di decidere quali fuznioni potranno essere usate nei file dove tale modulo viene caricato
*/
miaFunzione.rif_mia_funzione();
miaFunzione.rif_funzione2();
miaFunzione.rif_funzione3()

miaFunzione.rif_moltiplicazione(48, 56);


calcolatrice.funzione_somma(51, 89);
calcolatrice.funzione_divisione(10, 2);



