// to check if anumber is a pallindrome

const num = 121;
const numstr = num.toString();
const reversestr = numstr.split('').reverse().join('');
if (numstr === reversestr){
    console.log(num, "is a pallindrome.");
}
else {
    console.log(num, "is not a pallindrome.");
}

// to reverse a number

let n = 12345;
let num2 = n;
let reversenum2 = 0;
while (num2 > 0){
    reversenum2 = reversenum2 * 10 + (num2 % 10);
    num2 = Math.floor(num2 / 10);
}
console.log("original number: ",n);
console.log("original number: ",reversenum2);


// to check if anumber is an armstrong number

function isarmstrong(n){
    const nstr = n.toString();
    const ndigits = nstr.length;
    let sum = 0;
    for (let i=0 ; i<ndigits ; i++){
        const digit = parseInt(nstr[i]);
        sum += Math.pow(digit,ndigits);
    }
    return sum === n;
}
const n1 = 153;
if(isarmstrong(n1)){
    console.log(n1,"is an armstrong number.");
}
else{
    console.log(n1,"is not an armstrong number.");
}


// to print prime numbers in range 100 to 2000

function isprime(n){
    if (n <= 1){
        return false;
    }
    if (n <= 3){
        return true;
    }
    if (n%2 === 0 || n%3 === 0){
        return false;
    }

    for (let i=0 ; i*i <= n ; i += 6){
        if ( n%i === 0 || n%(i+2) === 0){
            return false;
        }
    }
    return true;
}
for(let num3 = 100 ; num3 <= 2000 ; num3++){
    if (isprime(num3)){
        console.log(num3);
    }
}


// to print perfect square numbers in range 10 to 200

for (let num = 10; num <= 200 ; num++){
    if(Math.sqrt(num) % 1 === 0){
        console.log(num);
    }
}
