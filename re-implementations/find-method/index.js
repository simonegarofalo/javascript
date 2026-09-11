// Re-implementation from scratch of the .find() method using a for loop

// Input array
const numbers = [1,2,3,4,5];

// Callback function
function isEven(n) {
        return n % 2 == 0;
}

// Function that replicates .find(), taking the array and a callback as params
function myFindMethod(a, callback){
	// Iterate over every element of the array
        for (let i = 0; i < a.length; i++) {
	// Store the result returned by the callback               
 	const result = callback(a[i], i, a);
		// Check if the result is true
                if(result){
			// Return the first value that respect the condition
                        return a[i];
                }
        };
}

console.log(myFindMethod(numbers, isEven));



// Test 1
const assert = require('node:assert');

function testFindId() {
	const  users = [
            {
                id: 1,
                name: "Luigi"
            },
            {
                id: 2,
                name: "Mario"
            },
            {
                id: 3,
                name: "Simona"
            },
            {
                id: 4,
                name: "Giulia"
            }
        ]

	function returnUser(u) {
		return u.id == 3;
	}

	const obtained = myFindMethod(users, returnUser);
	const expected = {id: 3, name: "Simona"};

	assert.deepStrictEqual(obtained, expected);
	console.log(obtained, expected);

	console.log("Find a value by id: tests passed");

}

testFindId();


// Test 2
function testCheckAge() {   
        const  users = [
            {
                id: 1,
                name: "Luigi",
		age: 13
            },
            {
                id: 2,
                name: "Mario",
		age: 21
            },
            {
                id: 3,
                name: "Simona",
		age: 17
            },   
            {
                id: 4,
                name: "Giulia",
		age: 19
            }
        ]

        function isLegal(u) {
                return u.age > 18;
        }

        const obtained = myFindMethod(users, isLegal);
        const expected = { id: 2, name: "Mario", age: 21 };
             
        assert.deepStrictEqual(obtained, expected);
        console.log(obtained, expected);
              
        console.log("Filtering by age: tests passed");
                
}
              
testCheckAge();
