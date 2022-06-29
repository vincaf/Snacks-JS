/**
 * 
    A partire da un array di stringhe,
    crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

    const listName = ['pippo', 'PLUTO', 'paperino', 'Topolino', 'PAPERONE', 'ameliA'];

    const correctWritingList = listName.map( (listName) => {
        return listName.charAt(0).toUpperCase() + listName.slice(1).toLowerCase();
    });

    console.log(listName);
    console.log(correctWritingList);