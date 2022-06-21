/* TRACCIA:
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
 * Chiedi all'utente il suo nome e comunicagli se può partecipare oppure no alla festa.
 */

const invitati  = ['sofia', 'gianna', 'luigina', 'lorenza' ,'luigi', 'stefano', 'simone', 'marco', 'chiara', 'riccardo'];
const userName = prompt('Inserisci il tuo nome');
console.log('Il tuo nome è ' + userName);

let control = false;

// *** Utilizzando il for
// for (let i = 0; i < invitati.length; i++) {
//     if (userName === invitati[i]){
//         control = true;
//     }
// }

// *** Utilizzando il while
let i = 0;

while( (i < invitati.length) && (control === false) ){
    if (userName === invitati[i]){
                control = true;
    }
    i++;
}

if(control === true){
    console.log('Sei invitato al party di Mr. Gatsby');
} else {
    console.log('Non sei invitato al party di Mr. Gatsby');
}