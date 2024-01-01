//1. Sum of Natural Numbers:**
//Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

//**Example:**
// ```javascript
const num2 = 5;
let sum = 0;
for (let i = 1; i <= num2; i++) {
  sum += i;
}
console.log(sum); // 15


// const n = 10;
// let sum = 0;
// for (let i=1; i<=n; i++ ){
//     sum += i;
// }
// console.log(sum);


// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

// **Example:**
// ```javascript
const m= 5;
let factorial = 1;
for (let i = 1; i <= m; i++) {
  factorial *= i;
}
//1*2*3*4*5=120
//5*4*3*2*1=120
console.log(factorial); // 120


function fact(num1){
  if(num1==1)
  return 1;
else
   return num1 * fact(num1-1);
}

let value = fact(6)
console.log(value);



// // **3. Fibonacci Sequence:**
// // Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// // **Example:**
// // ```javascript
//  const p = 7;
// let first = 0, second = 1, next;
// console.log(first); // 0
// console.log(second); // 1
// for (let i = 2; i < p; i++) {
//   next = first + second;
//   console.log(next);
//   first = second;
//   second = next;
// }


// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.

// **Example:**
// ```javascript
const input = "hello";
let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}
console.log(reversed); // "olleh"


// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

// **Example:**
// ```javascript
const num3 = 7;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num3); i++) {
  if (num3 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime); // true




// **7. Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.

// **Example:**
// ```javascript
const num4 = 12345;  
let count = 0;
let temp = num4;
while (temp !== 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log(count); // 5




// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.

// **Example:**
// ```javascript
const rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}




// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

// **Example:**
// ```javascript
const numbers = [7, 2, 9, 1, 5];
let largest = numbers[0];               
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {      
    largest = numbers[i];        
  }
}
console.log(largest); // 9


// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

// **Example:**
// ```javascript
const inputArray = [1, 2, 3, 4, 5];
const reversedArray = [];    
for (let i = inputArray.length - 1; i >= 0; i--) {
  reversedArray.push(inputArray[i]);
}
console.log(reversedArray); // [5, 4, 3, 2, 1]
