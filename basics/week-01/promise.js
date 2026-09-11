// Example of the Promise object that set a timeout before being resolved
let resolvedPromise = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Risolta"), 1000);
});	

resolvedPromise.then(result => console.log("Esempio di risultato:", result));


// Example of Promise object that set a timeout before being rejected
let rejectedPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Si è verificato un errore..")), 1000);
});

rejectedPromise.catch(error => console.log("Qualcosa è andato storto:", error.message));


// input array
const utenti = [
  { id: 1, nome: "Anna", email: "anna@example.com" },
  { id: 2, nome: "Mario", email: "mario@example.com" },
  { id: 3, nome: "Luigi", email: "luigi@example.com" },
  { id: 4, nome: "Giulia", email: "giulia@example.com" },
  { id: 5, nome: "Elena", email: "elena@example.com" },
];

// Function that gets an element from the array
function getUser(id) {
	// Return of the Promise
	return new Promise((resolve, reject) => {
		// Show the pending status
		console.log("Operazione in corso..");
		// Set a 1000ms timeout
		setTimeout(() => {
			// Store the result returned by the callback
			const found = utenti.find(u => u.id === id);
			// Check if the result is true and resolve or reject the Promise
			found ? resolve(found) : reject(new Error("Utente non trovato"));
		}, 1000);
	});
}
// Invoke the function and consuming it with then and catch to print the response
getUser(25)
	.then(result => console.log("Risultato:", result))
	.catch(error => console.log("Si è verificato un errore:", error.message));

