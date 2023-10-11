var score = prompt("Enter marks");
var grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "d";
} else {
  grade = " F ";
}
alert("your marks : " + score + " grade : " + grade);
