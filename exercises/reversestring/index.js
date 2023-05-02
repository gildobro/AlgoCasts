// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//solution 1: (original)
	//start at the end of the string
	//add each item in the string into a new reversed string
	reversed_string = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed_string += str[i];
	}
	return reversed_string;
}

reverse('hello');

module.exports = reverse;

//solution 2
// array.reverse solution:
// return str.split('').reverse().join('');

//solution 3
// for of loop:
// let reversed = '';
// for (let character of str) {
// 	reversed = character + reversed;
// 	console.log(reversed);
// }
// return reversed;

//solution 4 (the wow solution)
// array helper with reduce function:
//return str.split('').reduce((rev, char) => char + rev, '');
