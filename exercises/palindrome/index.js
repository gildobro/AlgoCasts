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

//Solution 2: most straight forward using js built in funcs
// const reverse_str = str.split('').reverse().join('');
// return str === reverse_str;

//Solution 3: array helper solution .every() --> NOT IDEAL
//if 1st element == last element, move forward
//	if 2nd element == 2nd last element, move forward
//		compare middle to itself
// return str.split('').every((char, i) => {
// 	return char === str[str.length - i - 1];
// });
