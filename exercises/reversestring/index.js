// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//start at the end of the string
	//add each item in the string into a new reversed string
	reverse_string = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reverse_string += str[i];
		//console.log(str[i]);
	}
	return reverse_string;
}

reverse('hello');

module.exports = reverse;
