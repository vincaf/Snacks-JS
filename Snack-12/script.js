/**
 * 
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare,
in base all'età.
 * 
 */

const personList = [
    { 
        nome: 'paolo', 
        cognome: 'rossi', 
        età: '50' 
    },
    { 
        nome: 'gianna', 
        cognome: 'verdi', 
        età: '24' 
    },
    { 
        nome: 'antonio', 
        cognome: 'giali', 
        età: '87' 
    },
    { 
        nome: 'salvatore', 
        cognome: 'petrello', 
        età: '50' 
    },
    { 
        nome: 'margherita', 
        cognome: 'fiore', 
        età: '2' 
    },
    { 
        nome: 'luigi', 
        cognome: 'esposito', 
        età: '16' 
    },
];

console.log(personList);

const newArray = personList.map((element) => {
    const newAge = (element.età >= 18) ? 'può guidare' : 'non può guidare';
    return `${element.nome} ${element.cognome} ${newAge}`;
});

console.log(newArray);

