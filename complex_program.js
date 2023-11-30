/* 
   Filename: complex_program.js
   Content: Complex JavaScript program demonstrating various concepts
*/

// Define a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create instances of Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Define a class for a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Create an instance of Rectangle class
const rectangle = new Rectangle(10, 20);
console.log(`Area of the rectangle is: ${rectangle.calculateArea()}`);

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`Factorial of 5 is: ${factorial(5)}`);

// Define a function to generate Fibonacci sequence recursively
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Define an object using object literal notation
const person3 = {
  name: "Alice",
  age: 27,
  hobbies: ["reading", "painting", "coding"],
  introduce: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person3.introduce();

// Define a higher-order function that takes a callback function as an argument
function sumArray(array, callback) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += callback(array[i]);
  }
  return sum;
}

// Define multiple callback functions
function doubleNumber(num) {
  return num * 2;
}

function squareNumber(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4, 5];
console.log(`Sum of doubled numbers in the array: ${sumArray(numbers, doubleNumber)}`);
console.log(`Sum of squared numbers in the array: ${sumArray(numbers, squareNumber)}`);

// Implement a simple sorting algorithm (Bubble Sort)
function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const unsortedArray = [7, 3, 9, 2, 5];
console.log(`Sorted array using Bubble Sort: ${bubbleSort(unsortedArray)}`);

// ... continue with more complex code, at least 200 lines long