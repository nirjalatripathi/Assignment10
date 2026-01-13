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

// Q.6. Reverse a string 
const reverseString = (text) => {
    let reversed = " ";
    for (let i = text.lenth-1 ; i>=0; i--) {
        reversed += text[i];
    }
    return reversed;
};
console.log (reverseString("hello"));

//Q.7. Create a Username
const createUsername = (firstname, lastname = "user") => (firstname + "_" + lastname).toLowerCase();
console.log(createUsername("Nirjala", "Tripathi"));

//Q.8. Function using callback
const applyOperation= (num1, num2, operation) => operation(num1, num2);
const add = (a,b) => a+b;
console.log ("Addition:", applyOperation (6,3, add));

// Q.9. Filter age of adult
const filterAdults= (age) => age.filter (age => age => 18);
console.log (filterAdults([11, 15, 18, 33, 20]));

//Q.10. 
const calculateGrade= (score) => {
    if (score >=90) return "A";
    else if (score >=80) return "B";
    else if (score >=70) return "C";
    else if (score >=60) return "D";
    else return "F";
};
console.log ("Grade is", calculateGrade(75));

