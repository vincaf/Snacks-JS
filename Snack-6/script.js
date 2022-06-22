/* 
 * Crea un array vuoto e chiedi all'utente un numero
 * da inserire nell'array. Continua a chiedere i numeri 
 * all'utente e a inserirli nell'array fino a quando 
 * la somma degli elementi è minore di 50.

 * Microbonus: controlla la somma degli elementi usando una funzione che prenda come argomento solo l'array e restituisca la somma dei suoi elementi
 */

const array = [];

let userNumber;
let sum = 0 ;

while(getSumOfElementsInArray(array) < 50){
    userNumber = prompt('Inserisci un numero');
    array.push(userNumber);
}

console.log(array);

function getSumOfElementsInArray(arrayToSum){
    let sumOfArrayElements = 0;

    for (let i = 0; i < arrayToSum.length; i++) {
        const currentNumber = parseInt(array[i]);
        if(isNaN (currentNumber) === false){
            sumOfArrayElements += currentNumber;        
        }
    }

    return sumOfArrayElements;
}