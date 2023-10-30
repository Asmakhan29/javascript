function addnum(a, b){
    let c = a+b;
    console.log(c);
}
addnum(4,5);
// console.log(c);     *************** ERROR **************


// using assignment operator
const getavg = function(m1, m2, m3){
    const avg = (m1 + m2 + m3)/3;
    return avg;
    
};

// console.log(getavg(47,50,65));
const ans = getavg(47,50,65);
console.log(ans);


//using arrow function
 const factorial = (n) => {
    let fact = 1;
    for(let i =2; i<=n ; i++){
        fact *= i;
    }
    return fact;
 };

 console.log(factorial(5));

 const newfunction = factorial;
 console.log(newfunction(5));


 // callback function
 const permutation = (n, r, fact_function) => {
    let ans = fact_function(n)/fact_function(n-r);
    console.log("permutation isn", ans);
 }

 permutation(10, 3, factorial);


 
