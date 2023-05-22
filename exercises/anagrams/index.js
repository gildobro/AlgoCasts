// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	//to get rid of spacing and symbols
	//.replace(/[^\w]/g, '');

	//create a character map for stringA, stringB
	let mapA = strToMap(stringA);
	let mapB = strToMap(stringB);

	//compare length of both maps
	if (Object.keys(mapA).length !== Object.keys(mapB).length) {
		return false;
	}

	//compare both maps
	for (let key in mapA) {
		if (mapA[key] !== mapB[key]) {
			console.log(false + ' is not equal');
			return false;
		}
	}
	return true;
}

//helper function for character maps and string cleaning
function strToMap(str) {
	let charMap = {};
	let newstr = str.toLowerCase().replace(/[^\w]/g, '');

	for (let char of newstr) {
		!charMap[char] ? (charMap[char] = 1) : charMap[char]++;
	}
	return charMap;
}

anagrams('rail safety', 'fairy tales');
anagrams('hello', 'olleh');

module.exports = anagrams;
