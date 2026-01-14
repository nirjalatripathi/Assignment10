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

//Q.3. Find the largest number in a given array.
let num = [2,3, 5, 4, 1];
let largest = num[0]; // Assume first element is largest
for (let i=1; i < num.length ; i++) {
    if (num[i] > largest) {
        largest = numbers[i]; // update largest if current num is bigger
    }
}
console.log ("Largest number is", largest);

// Q.4. Count how many even numbers and odd numbers are present in an array
let elements = [5, 7, 18, 23, 44];
let evenCount = 0;
let oddCount= 0;
for (let i=0; i< numbers.length; i++) {
    if (numbers[i] % 2 ===0) {
        evenCount = evenCount +1;
    } else {
        oddCount = oddCount +1;
    }
}
console.log ("Even numbers:", evenCount);
console.log ("Odd numbers:", oddCount);