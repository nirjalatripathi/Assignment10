//TOPIC 3: OBJECTS
//Q.1. Create an object that stores a person’s name, age, and city, then print all the Properties.
let person={
    name:" Nirjala",
    age: 19,
    city:"Kathmandu"
}
console.log(person);

//Q.2. Access and print the value of a specific property from an object.
let property={
    name: "Nirjala",
    age: 19,
    city: "Kathmandu"
};
console.log(property.name);

//Q.3. Add a new property to an existing object and update the value of an existing property
//New peoperty
person.country = "Nepal";
//Updated property
person.city="Lalitpur";
console.log(person);

//Q.4. Delete a property from an object and print the updated object.
delete person.age;
console.log(person);

//Q.5.  Loop through all properties of an object and print each key and value.
for (let key in person) {
    console.log(key + ":", person[key]);
}

//Q.6. Check whether a given property exists in an object.
if ("age" in person){
    console.log ("Age exists");
}
else {
    console.log ("Age does not exist");
}

//Q.7. Count the total number of properties in an object.
let count=0;
for (let key in person){
    count++;
}
console.log ("Total properties are", count);

//Q.8.  Convert an object into an array of keys and an array of values.
let keys = [];
let values = [];

for (let key in person) {
    keys.push(key);         
    values.push(person[key]); 
}
console.log("Keys:", keys);
console.log("Values:", values);

//Q.9. Given an object with numeric values, find the property with the highest value.
let marks = {
    math: 85,
    science: 92,
    english: 78
};

let highestKey = "";
let highestValue = -Infinity;

for (let key in marks) {
    if (marks[key] > highestValue) {
        highestValue = marks[key];
        highestKey = key;
    }
}

console.log("Highest:", highestKey, highestValue);

//Q.10. Merge two objects into a single object without using built-in merging methods.
let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    c: 3,
    d: 4
};

let mergedObject = {}; 
// Copy obj1 properties
for (let key in obj1) {
    mergedObject[key] = obj1[key];
}
// Copy obj 2 properties 
for (let key in obj2) {
    mergedObject[key] = obj2[key];
}
console.log("Merged Object:", mergedObject);
