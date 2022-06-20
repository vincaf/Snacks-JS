// TRACCIA: Il software deve chiedere per 10 volte all'utente di inserire un numero, il programma stampa la somma di tutti i numeri inseriti e la media.

const numberList = [];
let somma = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = parseInt(prompt('insert a number'));
    numberList.push(userNumber);
    somma = somma + userNumber;
}

let media = somma / numberList.length;

console.log('La somma è ' + somma);
console.log('La media è ' + media);