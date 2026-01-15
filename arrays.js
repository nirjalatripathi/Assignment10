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

//Q.5. Reverse an array without using the built-in reverse() method
let element= [1, 2, 3, 4, 5];
let reversed= [];
for (let i= numbers.length -1; i>=0; i--) {
    reversed.push (numbers[i]);
}
console.log ("reversed array is", reversed);

//Q.6. Check whether a given element exists in an array. If it exists, print its index; otherwise, print "Element not found"
let numb = [10, 20, 30, 40, 50];
let elementToFind = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numb[i] === elementToFind) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Element not found");
}

// Q.8. Remove duplicate elements from an array and store unique values in a new array
let el = [1,2,3,3,4,5];
let uniqueNumbers =[];
for (let i=0; i<numbers.length; i++) {
    let isDuplicate= false;
    for (let j=0; j<uniqueNumbers.length; j++) {
        if (numbers[i] ===uniqueNumbers[j]) {
            isDuplicate= true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log ("Unique elements:",uniqueNumbers);

//Q.9. Find the second largest number in an array without sorting it
let no = [5, 7, 8, 9, 17];
// Assume first two elements
let Largest= no[0];
let secondLargest= no[1];
//Swap if firs is smaller than second
if (secondLargest > largest) {
    let temp= largest;
    largest= secondLargest;
    secondLargest= temp;
}
for (let i=2; i<numbers.length; i++) {
    if (no [i] > largest ){
        secondLargest= largest;
        largest= no[i];

    }
    else if (no[i] > secondLargest) {
        secondLargest = no[i];
    }
}
console.log ("Second largest is", secondLargest);

// Q.10. Rotate an array to the right by one position
let array= [1, 2, 3, 4, 5];
let lastElement= array[numbers.length -1];
//shift all elements to the right
for (let i= numbers.length - 1; i>0; i--) {
    array[i] = numbers[i-1];
}
    array[0] =lastElement;
    console.log ("Array after rotation is", array);

//Q.11. Merge two arrays into one and sort the merged array in ascending order without using sort()
let array1 = [4, 2, 6];
let array2 = [1, 5, 3];

let mergedArray = [];

for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
}
for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
        if (mergedArray[i] > mergedArray[j]) {
            let temp = mergedArray[i];
            mergedArray[i] = mergedArray[j];
            mergedArray[j] = temp;
        }
    }
}

console.log("Merged and sorted array:", mergedArray);
