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

const newarr = nums.map((n) => { return n**2;})
console.log(newarr);
