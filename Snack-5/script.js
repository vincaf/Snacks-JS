/* 
 * Dare la possibilità di inserire due parole. Verificare tramite 
 * una funzione che le due parole abbiano la stessa lunghezza. 
 * Se hanno la stessa lunghezza, stamparle entrambe 
 * altrimenti stampare la più lunga delle due.
*/

function longestWord (firstWord, secondWord){
    console.log('La prima parola è: ' + firstWord);
    console.log('La seconda parola è: ' + secondWord);

    if (firstWord.length > secondWord.length){
        console.log('La parola più lunga è: ' + firstWord);
    } else if (firstWord.length < secondWord.length){
        console.log('La parola più lunga è: ' + secondWord);
    } else {
        console.log('Le due parole hanno la stessa lunghezza: ' + firstWord + "-" + secondWord);
    }
};

const userFirstWord = prompt('Inserisci la prima parola');
const userSecondWord = prompt('Inserisci la seconda parola');

longestWord(userFirstWord, userSecondWord);
