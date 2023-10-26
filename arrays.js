let myarr = [637, "ivji", 34.6, console.log];
console.log(myarr);
console.log(typeof myarr);
console.log(Array.isArray(myarr));

const fruits = ['apple','grapes','kiwi','mango','orange','fig'];
console.log(fruits.length);

// indexing
console.log(fruits[2]);
console.log(fruits.indexOf('mango'));

//console.log(fruits[-2]);  ************* ERROR *************

console.log(fruits.at(-3));

//Slicing
console.log(fruits.slice(2,5));
console.log(fruits.slice(2,15));
console.log(fruits.slice(2));
console.log(fruits.slice(1,-3));
console.log(fruits.slice(-3,-1));

console.log(fruits[65]);


