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

let string1 = "js string exercises";

let capitalize = string1.substr(0, 1).toUpperCase();

capitalize += string1.replace(string1.substr(0, 1), "");

console.log(capitalize);

// second method - 4

function firstUpper(Upper) {
  return (Upper && Upper[0].toUpperCase() + Upper.slice(1)) || Upper;
}
console.log(firstUpper("english"));

//Assignment - 5

function firstLower(lower) {
  return (lower && lower[0].toLowerCase() + lower.slice(1)) || lower;
}
console.log(firstLower("JS STRING EXERCISES"));

//Assignment - 6

//Assignment - 7

//Assignment - 8

//Assignment - 9

//Assignment - 10

//Assignment - 11

//Assignment - 12

//Assignment - 13

//Assignment - 14

//Assignment - 15

//Assignment - 16

//Assignment - 17

//Assignment - 18

//Assignment - 19

//Assignment - 20
