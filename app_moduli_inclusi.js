/* 
In Node js, esistono due tipi di moduli:

Built in Modules => sono i moduli INCLUSI in NODE JS, per usarli li dobbiamo semplicemeten importare

Moduli esterni: sono creati da sviluppatori terzi, e non sono inclusi in Node JS


os => serve per conoscere informationi legate al sistema oeprativo su cui node js è in esecuzione

path => ci permette di avere una serie di funzione per gestire i percorsi

fs => modulo necessario per leggere e scrivere file

http => questo modulo ci permetterà di creare un Server WEB


*/

const os = require('os');

const utente_corrente = os.userInfo();

console.log(utente_corrente);

/* 
possiamo creare un oggetto, le cui prorpietà conterranno una serie di dati, provenienti da alcuni metodi del modulo os
*/
const info_pc = {

    nome : os.type(), // sistema operativo del dispositivo su cui eseguiamo node
    versione : os.release(), // versione del S.O.
    memoria : os.totalmem() // la quantità, in byte, della memoria RAM del dispositivi

}

console.log( info_pc );

// possiamo ricevere dal modulo os il tempo di attività del sistema, verrà restituito un numero che rappresenta i secondi di attivaità

const tempo_di_attivita = os.uptime();

console.log(tempo_di_attivita);


// il modulo path => serve quando si lavor con i percorsi di file e/o cartelle

const path = require('path');

const mio_percorso = '/documenti/desktop/relazione/capitolo1.doc';

// creaimo un oggetto, che conterrà una serie di proprietà le quali avranno dei valori che si riferiranno a ciò che i metodi del modulo path restituisce

const info_mio_percorso = {

    // il metodo basename(), passandogli una percorso di un file, restituisce il nome del file completo di estesione
    nome_file : path.basename(mio_percorso),
    nome_Cartella : path.dirname(mio_percorso),
    estensione_file : path.extname(mio_percorso),
    percorso_assoluto_controllo : path.isAbsolute(mio_percorso),

    dettegli_percorso : path.parse(mio_percorso)



}

console.log(  info_mio_percorso   );
