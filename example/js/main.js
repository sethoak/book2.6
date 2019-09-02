/*
Let's examine some of the things that you will be representing in code.

An employee who needs to track expenses
The expense itself (date, business, dollar amount, purpose, etc.)
An employee who needs to verify that it's a valid expense
An expense report
These things are objects we need to represent in code. Each object has properties that define it.

An employee has a first name, last name, a role, and an account number
The expense has a date, location, dollar amount, and purpose
The expense report has a date, and a collection of expenses
*/

//Ex. for expense

//variable of expense is equal to these key values
const expense = {
  dateCreated: "01/01/2017",
  location: "Bob's Burgers",
  dollarAmount: "14.34",
  purpose: "Lunch with very important client",
  code: "1001A"
};

//Ex. for employee
const employee = {
  firstName: "Michael",
  lastName: "Tambornino",
  role: "Sales Rep",
  accountNumber: "1-8349058340"
};

//Ex., expense report generated

//variable expenseReport for the date of 2/1/17 generates an array []

const expenseReport = {
  dateCreated: "02/01/2017",
  expenses: [
    {
      amount: 14.34,
      dateCreated: "01/01/2017",
      vendor: "Bob's Burgers",
      code: "1001A"
    },
    {
      amount: 51.03,
      dateCreated: "01/03/2017",
      vendor: "Sunoco",
      code: "2213D"
    },
    {
      amount: 7.22,
      dateCreated: "01/07/2017",
      vendor: "Taco Bell",
      code: "1001A"
    }
  ]
};

//Re-assigning property values

const employee = {
  firstName: "Michael",
  lastName: "Tambornino",
  role: "Sales Rep",
  accountNumber: "1-8349058340"
};

employee.role = "President";
employee.accountNumber:"123";

/*
Defining behaviors in objects. You do that by defining a function as 
the value of a key. These are called methods instead of properties.
*/

//variable rufusTheDog has key values and a function built in.

const rufusTheDog = {
    age: 4,                 // Property
    species: "Dalmatian",   // Property
    bark: function () {     // Method
        window.alert("WOOF!")
    }
}

//calling the function in a variable
rufusTheDog.bark()

//changing the behavior of the method
const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    }
}

rufusTheDog.bark("mailman")
rufusTheDog.bark("leaf")
rufusTheDog.bark("child")

//Introduction to This
