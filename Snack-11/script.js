/**
 * 
    Crea un array di almeno 10 oggetti che rappresentano degli animali.

    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

const animalsList = [
    { nome: 'leone', 
    famiglia: 'felidi', 
    classe: 'mammiferi' },
    { nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' },
    { nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli' },
];

console.log(animalsList);

const mammiferiList = [...animalsList];

if(mammiferiList.classe != 'mammiferi'){
    mammiferiList.pop();
}

console.log(mammiferiList);