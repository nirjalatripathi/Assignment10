// TOPIC 2: ARRAYS 
//Q.1. Create an array of numbers and print all the elements using a loop
let numbers =[1, 2, 3, 4, 5];
for (let i=0; i< numbers.length; i++) {
    console.log (numbers[i]);
}

//Q.2. Given an array of numbers, find the sum of all elements
let number= [5, 10, 15, 20, 25];
let sum=0;
for (let i=0; i < number.length; i++) {
    sum= sum +numbers[i];
}
console.log ("The sum of all elements is", sum);