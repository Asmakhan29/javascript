const smartphone = [
    {
        brand: 'Samsung',
        model: 'm34',
        price: 19999,
        color: ['black', 'grey', 'blue']
    },
    {
        brand: 'Vivo',
        model: 'z14',
        price: 33000,
        color: ['blue', 'black']
    },
    {
        brand: 'oneplus',
        model: 'nord c3',
        price: 25000,
        color: ['white', 'yellow', 'grey']
    },
    {
        brand: 'samsung',
        model: 's23',
        price: 89000,
        color: ['white', 'grey']
    },
    {
        brand: 'oneplus',
        model: '11',
        price: 70000,
        color: ['blue', 'black', 'white']
    }
];

smartphone[2].color[1] = 'red';
console.log(smartphone[2]);

const modelname = smartphone.map((a) => {return a.model});
console.log(modelname);

const mobile = smartphone.filter((a) => {return a.price <= 30000});
console.log(mobile);

const whitephone = smartphone.filter( (a) => { return a.color.includes('white') } );
// const whitephone = smartphone.filter((a) => { return a.color.includes('white' && 'red')});       ********* to print object that containes white and red color*********
console.log("----------------------------------");
console.log(whitephone);
console.log("----------------------------------");

const brand1 = 'samsung';
const brandfilter = smartphone.filter((a) => {return a.brand === 'samsung' || a.brand == 'Samsung'});
console.log(brandfilter);


const detail = [
    {
        name: 'Rohan',
        email: 'rohan@hotmail.com',
        place: 'delhi'
    },
    {
        name: 'Anita',
        email: 'anita@gmail.com',
        place: 'Lucknow',
    },
    {
        name: 'Ajay',
        email: 'ajay@yahoo.com',
        place: 'Bangalore',
    },
    {
        name: 'Ramu',
        email: 'ramu@gmail.com',
        place: 'Jaipur',
    }
];

const findramu = detail.filter((a) => {return a.email === 'ramu@gmail.com'});
console.log(findramu);
// console.log(detail[1]);

const live = detail.filter((a) => {return a.place === 'delhi'});
console.log(live)

const mail = detail.map((a) => {return a.email});
console.log(mail);

const findyahoo = detail.filter((a) => {return a.email.includes('yahoo')});
console.log(findyahoo);



