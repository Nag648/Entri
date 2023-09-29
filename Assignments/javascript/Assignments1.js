// Assignment - 1

const truncate_string = "Robin Singh";

truncate_string.slice(4);

console.log(truncate_string.slice(0, 4));

//Assignment - 2

const abbrev_name = function (str1) {
  var split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
    return split_names[0] + " " + split_names[1].charAt(0) + ".";
  }
  return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

// Assignment - 3

function protect_email(email) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];
  const hiddenUsername = username.slice(0, 5) + "..." + username.slice(-2);
  return hiddenUsername + "@" + domain;
}
console.log(protect_email("robin_singh@example.com"));
//  Assignment - 3  (second method)

protect_email = function (user_email) {
  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splitted[1];
  return part1 + "...@" + part2;
};

console.log(protect_email("kongalasrilakshmi@email.com"));

// Assignment - 4
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("js string exercises"));

//  Assignment - 4 (second method)

function firstUpper(Upper) {
  return Upper && Upper[0].toUpperCase() + Upper.slice(1);
}
console.log(firstUpper("english"));

//Assignment - 5

function firstLower(lower) {
  return lower.charAt(0).toLowerCase() + lower.slice(1);
}
console.log(firstLower("JS STRING EXERCISES"));

//Assignment - 6
function truncateText(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15));

//Assignment - 7
function truncateText(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15));

//Assignment - 8
function greetTimeOfDay(hour) {
  if (hour >= 6 && hour <= 11) {
    console.log("Good morning");
  } else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
  } else if (hour >= 18 && hour <= 23) {
    console.log("Good evening");
  }
}
greetTimeOfDay(12);
//Assignment - 9
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}
isLeapYear(400);
//Assignment - 10
function positiveNegativeZero(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
positiveNegativeZero(-3);

//Assignment - 11
function calculateGrade(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
calculateGrade(85);

//Assignment - 12
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(4);
//Assignment - 13
function checkAge(age) {
  if (age >= 18 && age <= 65) {
    console.log("Allowed");
  } else {
    console.log("Not allowed");
  }
}
checkAge(26);
//Assignment - 14
function calculateTicketPrice(age, isStudent) {
  if (age < 18 || isStudent) {
    console.log("Discounted price");
  } else {
    console.log("Regular price");
  }
}
calculateTicketPrice(22);
//Assignment - 15
function validateUsername(username) {
  if (username.length >= 6 && /^[a-zA-Z0-9]+$/.test(username)) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}

//Assignment - 16
function selectColor(color, isAvailable) {
  if (isAvailable) {
    if (color === "blue" || color === "green") {
      console.log("Selected");
    } else if (color === "red") {
      console.log("Not available");
    } else {
      console.log("Invalid choice");
    }
  } else {
    console.log("Color not available");
  }
}

//Assignment - 17
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);

//Assignment - 18
const myStack = [];
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.push(40);
console.log(myStack);

//Assignment - 19
const myQueue = [];
myQueue.push("a");
myQueue.push("b");
myQueue.push("c");
console.log(myQueue);
myQueue.shift();
console.log(myQueue);
myQueue.push("d");
console.log(myQueue);

//Assignment - 20
const shoppingList = [];
shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("vegetables");
console.log(shoppingList);
shoppingList.splice(shoppingList.indexOf("bread"), 1);
console.log(shoppingList);
