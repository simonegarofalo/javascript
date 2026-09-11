// Example of .find() on an array of numbers
const array = [1,2,3,4,5,6,7,8,9];

const found = array.find(n => n > 0 && n < 2);

console.log(typeof found); 


// Example of .find() on an array of objects
const users = [
	{id: 1, name: "Marco"},
	{id: 2, name: "Giulio"},
	{id: 3, name: "Sara"}
];

const user = users.find(u => u.id === 3);

console.log(user.name);
console.log(typeof user);


// First attempt at re-implementation
const numbers = [1,2,3,4,5];

function isEven(n) {
	return n % 2 == 0;
}


function myFindMethod(a, callback){
	for (let i = 0; i < a.length; i++) {
		const result = callback(a[i], i, a);
		if(result){
			return a[i];
		}
	};
}

console.log(myFindMethod(numbers, isEven));
