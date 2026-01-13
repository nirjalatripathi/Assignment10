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

// Q.4. Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) +32;
console.log ("5 degree C in F is", celsiusToFahrenheit(5));

//Q.5. Find maximum in array
const findMax= (numbers) => {
    let max = numbers [0];
    for (let i = 1; i <numbers.length; i++) {
        if (numbers[i] > max) {
            max= numbers[i];
            
        }
    }
     return max;
};
console.log ("Maximum is", findMax ([3, 7, 2, 9, 1]));
