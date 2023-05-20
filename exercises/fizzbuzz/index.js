// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		//check both multiples
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
			//check for multiple of only 3
		} else if (i % 3 === 0) {
			console.log('fizz');
			//check for multiple of only 5
		} else if (i % 5 === 0) {
			console.log('buzz');
			//if all fail, print i
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(30);

module.exports = fizzBuzz;
