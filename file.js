// il modulo fs

/* 
Questo modulo serve a 

- leggere un file
- scrivere un file
- eliminare un file
- leggere il contenuto di una cartella
- rinominare un file
- osservare i cambiamenti di un file
*/

const fs = require('fs');

// Creare una cartella all'interno di quella all'interno di quella nelal quale è presente il file da cui si esegue l'istruzione

// fs.mkdir('./nuova_cartella', (err) => {

//         if (err) {
//             console.log(err);
//         } else {
//             console.log("La cartella è stata creata");
//         }
// });

// creazione di un nuovo file all'interno di una cartella
// writeFile() è il metodo dell'oggeto fs, che ci consente di creare un nuovo file e inserie al suo interno del contenuto

let contentuo_file = 'CIao, sono il testo inserito dentro il nuovo file';

/* 
il metodo writeFile, necessita di 3 parametri:
- percorso, nome ed estensione del file da creare
- contenuto da inserire nel file creato
- funzione di callback eseguita ala fine del processo, per gestire l'eventuale generazione di un errore

il metodo wrtieFile() viene eseguito in modalità ASICRONA
*/
fs.writeFile('./public/andrea.txt', contentuo_file, (err) => {

    if (err) {
        console.log(err);
        
    } else {

        console.log("Il file è stato creato correttamete");
        
    }

});

console.log('ciao');

