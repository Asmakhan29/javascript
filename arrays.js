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

// adding elements in an array

fruits.push('banana');
fruits.push('strawberry');   //add at the end of the array
console.log(fruits);

fruits.unshift('papaya');   //add the element at the starting of an array
console.log(fruits);


// replacing elements
fruits[2] = 'cherry';
console.log(fruits);

//removing element

fruits.pop(); //removes last element
console.log(fruits);

fruits.shift();  //removes first element
console.log(fruits);


// removing multiple items 
console.log(fruits);
fruits.splice(2,2);   //splice(starting index, no of elt to be removed)
console.log(fruits);

fruits.splice(1,2,'tomato','berry'); // replacing elements at the exact position
console.log(fruits);