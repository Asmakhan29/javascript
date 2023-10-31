const user = {
    name : 'ramu',
    email : 'ramu@gmail.com',
    rollno : 284
};
console.log(user.name);
console.log(user.rollno);
console.log(user['name']);
user.address = 'Lucknow';
user.rollno = '63254';
console.log(user);

const smartphone = {
    brand : 'Samsung',
    model : 'M34',
    price : 19999,
    color : ['black', 'grey', 'blue'],
    colors : 'black grey blue'
};
console.log(smartphone.brand);
console.log(smartphone.color[1]);
// console.log(color[1];)    *********** Error ********
console.log(smartphone.colors[1]);


const smartphonelist = [
    {
        brand : 'Samsung',
        model : 'M34',
        price : 19999,
        color : ['black', 'grey', 'blue'],
        colors : 'black grey blue'
    },
    {
        brand : 'Nokia',
        model : 'dgh',
        price : 21000,
        color : ['green', 'white', 'black'],
        colors : 'black grey blue'
    }
]
console.log(smartphonelist[0]);
console.log('-----------')
smartphonelist[0].model = 'gfy';
console.log(smartphonelist[0]);
console.log(smartphonelist[0].color[1]);
smartphonelist[0].color[0]='green';
console.log(smartphonelist[0]);

