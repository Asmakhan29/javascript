//to check if a number is a perfect square
const number = 16; 

const sqrt = Math.sqrt(number);
if (Number.isInteger(sqrt) && sqrt * sqrt === number) {
    console.log("${number} is a perfect square.");
} else {
    console.log("${number} is not a perfect square.");
}



//to check if number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(4));    // Should return false
console.log(isPrime(15));   // Should return false
console.log(isPrime(23));   // Should return true


//to print fibonacci series
function printFibonacciSeries(n) {
    let fib = [0, 1];

    for (let i = 2; fib[i - 1] + fib[i - 2] <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("Fibonacci series up to", n, ":");
    for (let i = 0; i < fib.length; i++) {
        console.log(fib[i]);
    }
}

const n = 100;
printFibonacciSeries(n);



//to print all numbers divisible by 7 and 11 in range of 400 -1200
function divisible(a,b){
    for(let i=a; i<=b ;i++){
        if(i%7 === 0 && i%11 === 0){
            console.log(i);
        }
    }
}
divisible(400,1200);


//to get the sum of all numbers from 1 to 100
function printsum(n){
    let sum = 0;
    for(let i = 1 ; i<=n ; i++){
        sum += i;
    }
    console.log("Sum is",sum);
}
printsum(100);



