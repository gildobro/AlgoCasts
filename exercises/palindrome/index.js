// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	//solution 1: my solution
	//for of loop, add each character into reverse_str
	//if reverse_str === str -> return true
	//return false
	reverse_string = '';

	for (character of str) {
		reverse_string = character + reverse_string;
	}
	console.log(reverse_string);
	if (reverse_string === str) {
		return true;
	}
	return false;
}

palindrome('abba');
palindrome('1000001');
palindrome('bamboclaat');

module.exports = palindrome;
