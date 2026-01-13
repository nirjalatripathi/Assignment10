// TOPIC 1: ARROW FUNCTIONS
// Q.1. Greet user
const greetUser= (name) => `Hello ${name}! Welcome to JavaScript`;
console.log (greetUser ("Nirjala"));

//Q.2. Area of rectangle
const calculateArea = (length, width) => length*width;
console.log ("The area of rectangle is", calculateArea (5,8));

// Q.3. Odd or even 
const isEven = (num) => num % 2 ===0;
console.log ("Is 13 even? ", isEven(13));
