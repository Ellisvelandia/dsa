// // // let greet = "Hello World";
// // // console.log(greet);

// // function greet(name) {
// //   console.log(`Hello ${name}`);
// // }

// // greet("Ellis velandia");
// // greet("You are a great developer");

// // document.getElementById("demo").innerHTML = "Hello Javascript";

// // // document.getElementById("btn").addEventListener("click", () => {
// // //   alert("Button clicked");
// // // });

// // // document.getElementById("btn").onclick = () => {
// // //   alert("Button clicked");
// // // };

// // // document.getElementById("btn").onclick = function () {
// // //   alert("Button clicked");
// // // };

// // // let age = 31;
// // // console.log(age);

// // function fullName(name) {
// //   console.log(`My name is ${name}`);
// // }

// // console.log(fullName("JOE DOE"));
// // console.log(fullName("Ellis velandia "));

// // let age = 31;

// // if (age != 30) {
// //   console.log("You are not 30 years old");
// // } else {
// //   console.log("You are 30 years old");
// // }

// // let fruits = ["apple", "banana", "cherry"];
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// // let books = ["book1", "book2", "book3"];
// // for (let i = 0; i < books.length; i++) {
// //   console.log(books[i]);
// // }

// // let book1 = "The Great Gatsby";
// // let book2 = "To Kill a Mockingbird";
// // let book3 = "1984";

// // console.log(book1, book2, book3);

// let book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   year: 1925,
// };

// // This code uses a for...in loop to iterate over all properties of the 'book' object
// // 'key' will be each property name ('title', 'author', 'year') in turn
// // book[key] accesses the value for each property
// // So this will print:
// // "title The Great Gatsby"
// // "author F. Scott Fitzgerald"
// // "year 1925"
// // for (let key in book) {
// //   console.log(key, book[key]);
// // }

// //promise example

// // let promise = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("done"), 1000);
// // });

// // promise.then((result) => {
// //   console.log(result);
// // });

// //async await example

// // Mock API data
// const mockApiData = {
//   books: [
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { id: 2, title: "1984", author: "George Orwell" },
//     { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
//   ],
// };

// // Modified async function with mock data
// async function fetchData() {
//   // Simulate API delay
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockApiData);
//     }, 1000);
//   });
// }

// // Test the async function
// // fetchData().then((data) => {
// //   console.log(data);
// // });

// // // Optional: You can also use async/await syntax to test
// // async function testFetch() {
// //   const result = await fetchData();
// //   console.log("Testing with async/await:", result);
// // }

// // testFetch();

// //lets build a short calculater

// // i would like to add more operations like substract, multiply, divide and modulus
// // This calculator function takes three parameters:
// // a: first number
// // b: second number
// // operation: string specifying the mathematical operation (defaults to 'add')

// function calculator(a, b, operation = "add") {
//   // Using if-else statements to determine which operation to perform
//   if (operation === "add") {
//     return a + b;
//   } else if (operation === "subtract") {
//     return a - b;
//   } else if (operation === "multiply") {
//     return a * b;
//   } else if (operation === "divide") {
//     // Check for division by zero to prevent errors
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return a / b;
//   } else if (operation === "modulus") {
//     // Check for modulus by zero to prevent errors
//     if (b === 0) {
//       throw new Error("Cannot calculate modulus with zero");
//     }
//     return a % b;
//   } else {
//     // Handle invalid operations
//     throw new Error("Invalid operation");
//   }
// }

// // console.log(calculator(10, 5, "add"));
// // console.log(calculator(10, 5, "subtract"));
// // console.log(calculator(10, 5, "multiply"));
// // console.log(calculator(10, 5, "divide"));
// // console.log(calculator(10, 0, "modulus"));

// // Example usage with explanations:
// // Addition: 10 + 5 = 15
// // console.log(calculator(10, 5, 'add'));

// // Subtraction: 10 - 5 = 5
// // console.log(calculator(10, 5, 'subtract'));

// // Multiplication: 10 * 5 = 50
// // console.log(calculator(10, 5, 'multiply'));

// // Division: 10 / 5 = 2
// // console.log(calculator(10, 5, 'divide'));

// // Modulus (remainder): 10 % 3 = 1
// // console.log(calculator(10, 3, 'modulus'));

// // function calculator(a, b) {
// //   return a + b;
// // }

// // console.log(calculator(5, 2));

// // Let's explore loops with practical examples

// // 1. Basic Counter Project
// console.log("--- Counter Project ---");
// for (let i = 1; i <= 5; i++) {
//   console.log(`Count: ${i}`);
// }

// // 2. Sum Calculator Project
// console.log("\n--- Sum Calculator Project ---");
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// console.log(`Sum of numbers: ${sum}`);

// // 3. Shopping Cart Project
// console.log("\n--- Shopping Cart Project ---");
// let cart = [
//   { item: "Book", price: 20 },
//   { item: "Pen", price: 5 },
//   { item: "Notebook", price: 10 },
// ];
// let totalPrice = 0;
// cart.forEach((product) => {
//   totalPrice += product.price;
//   console.log(`Added ${product.item}: $${product.price}`);
// });
// console.log(`Total cart value: $${totalPrice}`);

// // 4. While Loop Example - Password Attempt
// console.log("\n--- Password Checker Project ---");
// let correctPassword = "12345";
// let attempts = 3;
// while (attempts > 0) {
//   console.log(`Remaining attempts: ${attempts}`);
//   // In real application, you'd get input from user
//   attempts--;
// }

// // 5. Do-While Loop Example - Game Score
// console.log("\n--- Game Score Project ---");
// let score = 0;
// let level = 1;
// do {
//   console.log(`Playing level ${level}`);
//   score += 10;
//   level++;
// } while (level <= 3);
// console.log(`Final score: ${score}`);

// // Explanation of Different Types of Loops:
// /*
// 1. For Loop:
//    - Used when you know the number of iterations
//    - Perfect for counting and array iteration
//    Example: for (let i = 0; i < n; i++) { }

// 2. While Loop:
//    - Used when you don't know how many iterations needed
//    - Continues until condition becomes false
//    Example: while (condition) { }

// 3. Do-While Loop:
//    - Similar to while loop but executes at least once
//    - Checks condition after execution
//    Example: do { } while (condition)

// 4. For...of Loop:
//    - Used to iterate over array elements
//    - Cleaner syntax for array iteration
//    Example: for (let item of array) { }

// 5. forEach Loop:
//    - Array method for iteration
//    - Can access element, index, and array
//    Example: array.forEach(element => { })
// */
// JavaScript Functions Tutorial and Project
// console.log("\n--- Function Basics and Calculator Project ---");

/*
Functions are reusable blocks of code that perform specific tasks.
They help us organize code, avoid repetition, and make programs modular.

Key Concepts:
1. Function Declaration - How to create a function
2. Parameters - Input values a function can receive
3. Return Values - Output that a function gives back
4. Function Calls - How to use/execute a function
*/

// Mini-Project: Build a Calculator Helper
// console.log("\nYour Task: Complete the Calculator Helper Functions!");

// Here's a completed example function:
// function add(a, b) {
//   try {
//     return a + b;
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// // TODO: Complete these functions
// function subtract(a, b) {
//   return a - b;
//   // Your code here: return the result of a - b
// }

// function multiply(a, b) {
//   return a * b;
//   // Your code here: return the result of a * b
// }

// function divide(a, b) {
//   return a / b;
//   // Your code here: return the result of a / b
//   // Remember to handle division by zero!
// }

// Test your functions:
// console.log(add(5, 3));
// console.log(subtract(15, 7));
// console.log(multiply(6, 4));
// console.log(divide(20, 5));

/*

Project Extension Ideas:
1. Add error handling for invalid inputs
2. Add more operations (power, square root, etc.)
3. Create a function that takes an operation as a parameter
4. Add a history feature to store previous calculations:
   - Create an array to store calculation history
   - Add a function to save calculations
   - Add a function to display history


Learning Goals:
- Understanding function syntax
- Working with parameters and return values
- Problem-solving with functions
- Basic error handling
*/

// function fullName(params) {
//   return params;
// }

// console.log(fullName("Ellis velandia"));

// let history = [];

// function saveCalculation(operation, result) {
//   history.push(`${operation} = ${result}`);
// }

// saveCalculation("add", add(5, 3));
// console.log(history);

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// describe("Calculator functions", () => {
//   it("should add two numbers", () => {
//     expect(add(1, 2)).toBe(3);
//   });
// });

// test("should subtract two numbers", () => {
//   expect(subtract(5, 3)).toBe(2);
// });
// Demonstrating the difference between prompt and alert

// Alert: Shows a message to the user, only has an "OK" button
// It's a one-way communication - just displays information
// alert("This is an alert - it just shows you this message!");

// // Prompt: Shows a message AND gets input from the user
// // It has both an input field and OK/Cancel buttons
// // It returns the user's input as a string (or null if cancelled)
// const userInput = prompt("This is a prompt - try typing something:");

// // We can then use the input from prompt
// if (userInput === null) {
//   alert("You cancelled the prompt!");
// } else if (userInput === "") {
//   alert("You didn't type anything!");
// } else {
//   alert("You typed: " + userInput);
// }

// Key differences:
// 1. Alert - just shows message, returns undefined
// 2. Prompt - shows message AND gets user input, returns string or null
