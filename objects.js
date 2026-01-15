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

