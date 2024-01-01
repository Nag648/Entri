function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));




// JavaScript program 
// to generate fibonacci series up to n terms

// take input from the user
var number = 20;
var n1 = 0, n2 = 1, nextTerm;

console.log(n1);

for (var i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}




const num = 50;
var m1 = 0, m2 = 1, nextTerm1;
for (let i = 1; i <= num; i++){
    console.log(m1);
  nextTerm1 = m1 + m2;
    m1 = m2;
    m2 = nextTerm1;
}
