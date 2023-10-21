function myFunction(text) {
  console.log(text);
}

myFunction("Hello World!");

// Function declaration
function add(a, b) {
  console.log(a + " " + b);
}

// Calling a function
add("sri", "nag");

// Function Expression
const nom = function (a1, b1) {
  console.log(a1 + b1);
};

const name = "sri";
const name1 = "nag";

const fullName = [name + name1];
console.log(fullName);
// Calling function
nom(5, 8);

function Language() {
  let first = "HTML",
   second = "CSS",
  Third = "Javascript";
  return {
    first,
    second,
    Third,
  };
}
let { first, second, Third } = Language();
console.log(first);
console.log(second);
console.log(Third);
