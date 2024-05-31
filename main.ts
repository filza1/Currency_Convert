
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n Currency converter\n"))

// Define the list of currency and their exchange rates 
let exchange_rate: any = {
    "USD": 1, //base currency 
    "EUR": 0.9,//European currency(Euro) 
    "JYP": 113,//Japenese currency(yen)
    "CAD": 1.3,//Canadian dollar
    "AUD": 1.65,//Australian Dollar
    "PKR": 280,//pakistani rupees
} 

//Prompt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"select the currency to convert from:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    }
]);

// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount
 
//formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount 
console.log(`Converted Amount = ${converted_amount}`);