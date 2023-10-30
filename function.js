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