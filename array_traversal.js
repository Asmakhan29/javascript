const nums = [2,6,23,3,7,9,18];
for(let n of nums){
    if(n % 2 === 0){
        console.log(n);
    }
};

nums.forEach((n) => {            //better to apply for time complexity
    // console.log(n);
    if(n%2 !== 0){
        console.log(n);
    }
})


//create a new array that contains square of all elts

//map
const newarr = nums.map((n) => { return n**2;})
console.log(newarr);

//filter
const even = nums.filter( (a) => { return a%2 === 0} );
console.log(even);

const price = [2300, 150, 1300, 800, 300, 600, 650];
const filprice = price.filter( (n) => { return (n>=500 && n <= 1000)})
console.log(filprice);

const brands = ['abc@yahoo.com','mmm@gmail.com','xyz@gmail.com','jjj@hotmail.com'];

console.log("jsdjn@gmail.com".includes('mail'));

const newmail = brands.filter((a) => { return a.includes('gmail')});
console.log(newmail);