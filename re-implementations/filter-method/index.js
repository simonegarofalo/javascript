// Re-implementation from scratch of the .filter() method using a for loop

// Input array
const array = [1,2,3,4,5,6];

// Function to be applied to each element of the array
function isEven(n) {
        return n % 2 == 0;
}

// Function that replicates .filter(), taking the array and a callback as params
function myFilterMethod(a, callback) {
	// Empty array to be filled with the new values
        const newArray = [];
	// Store the length of the array before the loop 
	const length = a.length;

	// Iterate over every element of the array with a for loop (using length instead of a.length)
        for(let i = 0; i < length; i++) {
		// Call the callback with its args
                const result = callback(a[i], i, a);
		// Check if the result is true
                if(result){
			// Push the matching element into the array declared above
                        newArray.push(a[i]);
                }
        }
	// Return the new array containing all values that respect the condition
        return newArray;
}

console.log(myFilterMethod(array, isEven));


// Test 1
const assert = require('node:assert');

function testWordLength () {
	const array = ["Scrivania", "Computer", "Monitor", "Tastiera", "Paesaggio", "Test"];
	function checkWord(w) {
		return w.length > 6;
	}
	
	const obtained = myFilterMethod(array, checkWord);
	const expected = ["Scrivania", "Computer", "Monitor", "Tastiera", "Paesaggio"];

	assert.deepStrictEqual(obtained, expected);
	console.log(obtained, expected);

	console.log("Filtering by length: tests passed");
	
}

testWordLength();



// Test 2
function testFilterLoggedUsers() {
	const  users = [
            {
                id: 1,
                name: "Simone",
                logged: true,
            },
            {
                id: 2,
                name: "Marco",
                logged: false,
            },
            {
                id: 3,
                name: "Mario",
                logged: true,
            },
            {
                id: 4,
                name: "Luca",
                logged: false,
            }
        ]

	function isLogged (u) {
		return u.logged;
	}

	const obtained = myFilterMethod(users, isLogged);
	const expected = [
        	{ id: 1, name: "Simone", logged: true },
        	{ id: 3, name: "Mario",  logged: true },
    		];

	assert.deepStrictEqual(obtained, expected);
	console.log(obtained, expected);

	console.log("Filtering by status: tests passed");

}

testFilterLoggedUsers();
