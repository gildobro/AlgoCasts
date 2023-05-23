// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}

	return result;
}

capitalize('hello world!');

module.exports = capitalize;
// //Solution 1: my solution (with a bit of help from the internet for the forEach loop)
// //toArray
// str = str.split(' ');

// //for each word in the index of string, capitalize first letter and slice rest of word
// str.forEach((word, index) => {
// 	const firstLetter = word.charAt(0).toUpperCase();
// 	const rest = word.slice(1).toLowerCase();

// 	str[index] = firstLetter + rest;
// });

// //toString
// str = str.join(' ');

// return str;

////////////////////

// //Solution 2: similar to Solution 1 but with for of loop

// //declare empty words array
// const words = [];

// //loop through array, push capped first letter + sliced rest of word to the new array
// for (let word of str.split(' ')) {
// 	words.push(word[0].toUpperCase() + word.slice(1));
// }

// //Array to String
// return words.join(' ');
