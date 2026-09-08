// Re-implementation from scratch of the .map() method using a for loop

// Input array
const testArray = [1,2,3,4,5,6,7,8,9];

// Function to be applied to each element of the array
function operation (item) {
        return item * 2;
}

// Function that replicates .map(), taking the array and a callback as parameters
function myMapMethod(a, callback) {
	// Empty array to be filled with the new values
        const newArray = [];
	// Iterate over every element of the array with a for loop:
        for(let i = 0; i < a.length; i++) {
		// Get the parameters expected by .map() (current element, index, and array)
                const result = callback(a[i], i, a);
		// Push each new value into the array declared above
                newArray.push(result);
        }
	// Return the new array containing all transformed values
        return newArray;
};

// Log the result. The output matches what the native .map() method would return
console.log(myMapMethod(testArray, operation));




// Test 1
const assert = require('node:assert');

function testDoubling() {
	const array = [1,2,3,4,5];
        function doubled (item) {
                return item * 2;
        }

	const obtained = myMapMethod(array, doubled);
	const expected = [2,4,6,8,10];

	assert.deepStrictEqual(obtained, expected);

	console.log("Doubling function tests passed");
};

testDoubling();




// Test 2
function testIndexAndProps() {
        const array = [
		{name: 'Marco', surname: 'Verdi'},
		{name: 'Giulia', surname: 'Bianchi'},
		{name: 'Francesco', surname: 'Rossi'}
	];
        function getName (item, i) {
                return `${i} - ${item.name} ${item.surname}`;
        }

        const obtained = myMapMethod(array, getName);
        const expected = ["0 - Marco Verdi", "1 - Giulia Bianchi", "2 - Francesco Rossi"];

        assert.deepStrictEqual(obtained, expected);

        console.log("Index and props tests passed");
};

testIndexAndProps();
