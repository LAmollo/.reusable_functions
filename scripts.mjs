//Thinking Functionality

//While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. 
//Write functions with descriptive names, and clear inputs and outputs.
//With that in mind, write functions that accomplish the following:

//Take an array of numbers and return the sum.

function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

//Take an array of numbers and return the average.

function averageArray(numbers) {
    const sum = sumArray(numbers);
    return sum / numbers.length;
}


//Take an array of strings and return the longest string.

function longestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}


//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}


//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
    if (n >= 1) {
        printNumbers(n - 1);
        console.log(n);
    }
}

//Output

const numbers = [1, 2, 3, 4, 5];
const strings = ['say', 'hello', 'in', 'the', 'morning'];

console.log(sumArray(numbers)); // Output: 15
console.log(averageArray(numbers)); // Output: 3
console.log(longestString(strings)); // Output: 'morning'
console.log(stringsLongerThan(strings, 3)); // Output: ['hello', 'morning']
printNumbers(5); // Output: 1 2 3 4 5

//2. THINKING METHODICALLY


//Use callback functions alongside Array methods to accomplish the following:
//Sort the array by age.
//Filter the array to remove entries with an age greater than 50.
//Map the array to change the “occupation” key to “job” and increment every age by 1.
//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//Sort the array by age.
const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log("Sorted by age:", sortedByAge);

//Filter the array to remove entries with an age greater than 50.
const filteredByAge = data.filter(entry => parseInt(entry.age) <= 50);
console.log("Filtered by age:", filteredByAge);

//Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedData = data.map(entry => ({
    ...entry,
    job: entry.occupation,
    age: parseInt(entry.age) + 1
}));
console.log("Mapped data:", mappedData);

//Use the reduce method to calculate the sum of the ages.
const sumOfAges = data.reduce((total, entry) => total + parseInt(entry.age), 0);
console.log("Sum of ages:", sumOfAges);

//Use the result to calculate the average age.
const averageAge = sumOfAges / data.length;
console.log("Average age:", averageAge);

//3. THINKING CRITICALLY

//For this section, develop functions that accomplish the following:
//Take an object and increment its age field.
//Take an object, make a copy, and increment the age field of the copy. Return the copy.
//For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. 
//Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
//Thought experiment: 
//since the Date object is an object,
// what would happen if we modified it in the copy of the object 
//created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?

function incrementAge(object) {
    // Create age field if it doesn't exist
    if (!object.hasOwnProperty('age')) {
        object.age = 0;
    }
    // Increment age field
    object.age++;
    // Add or modify updated_at field with current time
    object.updated_at = new Date();
    return object;
}

function incrementAgeAndCopy(object) {
    //Shallow copy of the object
    const copy = { ...object };
    //Age field 
    if (!copy.hasOwnProperty('age')) {
        copy.age = 0;
    }
    // Increment age field 
    copy.age++;
    // Add or modify updated_at field with current time
    copy.updated_at = new Date();
    return copy;
}

// Test the functions
const obj1 = { name: "Alice" };
console.log("Original object:", obj1);
console.log("Result of incrementAge:", incrementAge(obj1));
console.log("Original object after incrementAge:", obj1);

const obj2 = { name: "Bob" };
console.log("Original object:", obj2);
console.log("Result of incrementAgeAndCopy:", incrementAgeAndCopy(obj2));
console.log("Original object after incrementAgeAndCopy:", obj2);

