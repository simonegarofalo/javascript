// Example of .filter() on an array of strings(filtering by length)
const array = ["Simone", "Stefania", "Margherita", "Antonio", "Maria", "Andrea"];

const result = array.filter((a) => a.length > 8);

console.log(result);


const colors = ["Rosso","Verde", "Blu", "Bianco", "Nero", "Grigio"];

const filteredColors = colors.filter(function(c,i) {
	return i >= 5;
});

console.log(filteredColors);


// Example of .filter() method on an array of numbers
const numbers = [1,2,3,4,5,6,7,8,9,10];

function getEvenNumbers(arr) {
    return arr.filter((n) => n % 2 == 0);
}

console.log(getEvenNumbers(numbers));


// Example of .filter() method on an empty array
const empty = [];

const emptyValue = empty.filter((e) => e.length < 5);

console.log(typeof emptyValue);
