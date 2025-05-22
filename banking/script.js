// Display a menu using a switch statement:

// 1: Check Balance

// 2: Deposit Money

// 3: Withdraw Money

// 4: Exit

// Use a do-while loop to repeat the menu until the user selects exit.

// Use a for loop to simulate transaction history print last 5 transactions as dummy data.



let balance = 40000;
let menu;
let transaction=[];

do {
  menu = parseInt(prompt(`Press:
  1: Check Balance
  2: Deposit Money
  3: Withdraw Money
  4: Exit`));

  switch(menu){
    case 1:
      console.log("Total Balance:", balance);
      break;

    case 2:
      let depositMoney = parseInt(prompt("Enter the amount to deposit:"));
      if ( depositMoney > 0) {
        balance =balance + depositMoney;
        console.log("Deposit successful. Total Balance:", balance);
        transaction.push("deposited money: "+depositMoney);
      } else {
        console.log("Enter amount greater than 0");
      }
      break;

    case 3:
      let withdrawMoney = parseInt(prompt("Enter the amount to withdraw:"));
      if (withdrawMoney > 0) {
        if (withdrawMoney <= balance) {
          balance = balance - withdrawMoney;
          console.log("Withdrawal successful. Total Balance:", balance);
          transaction.push("Withdraw Money: "+withdrawMoney);
        } else {
          console.log("Insufficient balance.");
        }
      } else {
        console.log("Enter amount greater than 0");
      }
      break;

    case 4:
      console.log("You have exited the system.");
      break;

    default:
      console.log("Please enter a valid option (1–4).");
  }

} while(menu !== 4);


//transaction history using dummy data and for loop

// let transactionHistory = [
//   "Deposited Rs. 5000",
//   "Withdrew Rs. 2000",
//   "Deposited Rs. 3000",
//   "Withdrew Rs. 1000",
//   "Deposited Rs. 8000"
// ];

console.log("Last  Transactions");
for (let i = 0; i < transaction.length; i++) {
  console.log((i + 1) + ". " + transaction[i]);
}
