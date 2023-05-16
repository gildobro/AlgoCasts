// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	//Solution 1: my solution
	str_int = n.toString();
	reversed_str = '';
	//handle negative integers
	if (Math.sign(parseInt(str_int)) == -1) {
		reversed_str = '-';
	}
	//handle 0
	if (parseInt(str_int) == 0) {
		reversed_str = '0';
	}
	for (let i = str_int.length - 1; i >= 0; i--) {
		//if contains 0
		if (str_int[i] === '0' || str_int[i] === '-') {
			str_int[i] = '';
			reversed_str += '';
		} else {
			reversed_str += str_int[i];
		}
		console.log(reversed_str);
	}
	return parseInt(reversed_str);
}

reverseInt(-12);
reverseInt(500);

module.exports = reverseInt;

// //solution 2: simplistic and short

// const reversed = n.toString().split('').reverse().join('');

// return parseInt(reversed) * Math.sign(n);
