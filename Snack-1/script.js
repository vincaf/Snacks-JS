// TRACCIA: L'utente inserisce due numeri in successione, con due Prompt. Il software stampa il maggiore. (Se sono uguali? => scegliete voi)

// Inizializzazione delle variabili per i numeri inseriti dall'utente
const userFirstNumber = parseInt(prompt('inserisci il primo numero'));
const userSecondNumber = parseInt(prompt('inserisci il secondo numero'));

// Condizione per verificare il numero maggiore, nel caso siano uguali non viene restituito nessun numero in console 
if (userFirstNumber > userSecondNumber){
    console.log('Il numero maggiore è: ' + userFirstNumber);
} else if (userSecondNumber > userFirstNumber){
    console.log('Il numero maggiore è: ' + userSecondNumber);
} else if (userFirstNumber === userSecondNumber){
    console.log('I due numeri sono uguali');
} else {
    console.log('Inserisci i numeri correttamente');
}