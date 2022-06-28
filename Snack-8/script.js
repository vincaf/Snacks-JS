/* 
 * Crea 10 oggetti che rappresentano un peperone.
 * Dividi in due array separati i peperoni che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di peperoni.
 */

const peperoni = [
    {
        varietà : 'peperone nano',
        peso : 0.2,
        lunghezza: '10cm'
    },
    {
        varietà : 'peperone giallo',
        peso : 0.5,
        lunghezza: '20cm'
    },
    {
        varietà : 'peperone viola',
        peso : 0.5,
        lunghezza: '20cm'
    },
    {
        varietà : 'peperone gigante',
        peso : 0.8,
        lunghezza: '30cm'
    },
    {
        varietà : 'peperone soffice',
        peso : 0.5,
        lunghezza: '10cm'
    },
    {
        varietà : 'peperone simpatico',
        peso : 0.5,
        lunghezza: '30cm'
    },
    {
        varietà : 'peperone nano',
        peso : 0.2,
        lunghezza: '10cm'
    },
    {
        varietà : 'peperone giallo',
        peso : 0.5,
        lunghezza: '20cm'
    },
    {
        varietà : 'peperone blu',
        peso : 0.5,
        lunghezza: '20cm'
    },
    {
        varietà : 'peperone medio',
        peso : 0.5,
        lunghezza: '15cm'
    }
];

const somme = {
    peperoniCorti : 0,
    peperoniLunghi : 0
}

const peperoniLunghi = [];
const peperoniMenoLunghi = [];

for (let i = 0; i < peperoni.length; i++) {
    const lunghezzaPeperone = parseInt(peperoni[i].lunghezza);

    if(lunghezzaPeperone > 15){
        peperoniLunghi.push(peperoni[i]);
        somme.peperoniLunghi += peperoni[i].peso;
    } else {
        peperoniMenoLunghi.push(peperoni[i]);
        somme.peperoniCorti += peperoni[i].peso;
    }
}

console.log(peperoniLunghi, somme.peperoniLunghi);
console.log(peperoniMenoLunghi, somme.peperoniCorti);