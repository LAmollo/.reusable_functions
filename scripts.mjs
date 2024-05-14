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


