var balance = 5000;
var amount = prompt("Enter a amount to transftar");

if (amount < balance) {
  alert("before deduction balance = " + balance);
  balance = balance - amount;
  alert("deducted successfully");
  alert("bafore deduction balance = " + balance);
} else {
  alert(
    "your balance is  :  " + balance + "  enter amount less than your balance"
  );
}
