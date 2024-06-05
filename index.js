#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your Pin:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Please Select Your Account Type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawl"],
        message: "Select Your Transaction",
        when(answers) {
            return answers.accountType == "Current";
        }
    },
    {
        type: "number",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the Withdrawl Amount:",
        when(answers) {
            return answers.transactionType == "Withdrawl";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log("Current Balance");
    const enteredAmount = answers.amount;
    if (balance <= enteredAmount) {
        console.log("Insuficient Balance");
    }
    else {
        const remaining = balance - enteredAmount;
        console.log("Your remaining balance is", remaining);
    }
}
