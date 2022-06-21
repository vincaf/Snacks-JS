// TRACCIA:
// Crea un array vuoto, chiedi all'utente di inserire un numero per 7 volte.
// Se il numero è dispari inseriscilo nell'array vuoto.

const listNumbers = [];
let userNumber;

for (let i = 0; i < 7; i++) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    
    if (userNumber % 2 !== 0){
        listNumbers.push(userNumber);
    }
}

console.log(listNumbers);