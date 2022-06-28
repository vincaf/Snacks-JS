/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
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

let sommaPeso = 0;

for (let i = 0; i < peperoni.length; i++) {
    sommaPeso = sommaPeso + peperoni[i].peso;    
}

console.log(sommaPeso);