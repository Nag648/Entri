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
