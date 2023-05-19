// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	//create an empty character Map, max, and max char
	const chars = {};
	let max = 0;
	let maxChar = '';

	//loop through string, count occurences of each string and add them into chars object
	for (let char of str) {
		!chars[char] ? (chars[char] = 1) : chars[char]++;
	}

	//loop through char object to find the largest char
	for (let key in chars) {
		//if property is largest, max == key
		if (chars[key] > max) {
			max = chars[key];
			maxChar = key;
		}
	}

	return maxChar;
}

maxChar('11111112344567');

module.exports = maxChar;
