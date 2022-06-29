/**
 * 
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà:
    marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati:
    nel primo array solo le auto a benzina, 
    nel secondo solo le auto a diesel, 
    nel terzo il resto delle auto.
    
    Infine stampa separatamente i 3 array.

 * 
 */

const auto = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'fiat',
        modello: 'tipo',
        alimentazione: 'benzina',
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel',
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'gpl',
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'elettrico',
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl',
    },
    {
        marca: 'opel',
        modello: 'agila',
        alimentazione: 'metano',
    },
    {
        marca: 'opel',
        modello: 'agila',
        alimentazione: 'metano',
    },
    {
        marca: 'fiat',
        modello: 'tipo',
        alimentazione: 'diesel',
    }
];

console.log(auto);

const autoBenzina = auto.filter( (auto) => {
    return ( auto.alimentazione == 'benzina')
});

const autoDiesel = auto.filter( (auto) => {
    return ( auto.alimentazione == 'diesel')
});

const otherAuto = auto.filter( (auto) => {
    return ( auto.alimentazione != 'benzina' && auto.alimentazione != 'diesel');
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(otherAuto);