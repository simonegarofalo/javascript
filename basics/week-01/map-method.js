// Example of .map() on an array of numbers
const numbers = [1, 2, 3];

let dubbled = numbers.map(function(num) {
	return num * 2;
});

console.log("Array of numbers: " + numbers, dubbled);


// Example of .map() on an array of numbers without a return statement
const newNumbers = [1, 2, 3];

let triplicated = newNumbers.map(function(newNum) {
	});

console.log("Missing return: " + newNumbers, triplicated)


// Example of .map() on an array of objects
const users = [
	{ id: 1, name: 'Mario'},
	{ id: 2, name: 'Lucia'},
	{ id: 3, name: 'Matteo'}
];

const usersName = users.map(u => u.name);

console.log("Array of objects: " + users, usersName);


// Example of .map() on an empty array
const array = []

const arrayValue = array.map(a => a.name);

console.log("Empty array: " + array, arrayValue)

