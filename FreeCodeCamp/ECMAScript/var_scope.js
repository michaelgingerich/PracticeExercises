function practiceFunction() {
	"use strict";
	var i = 'function scope';
		if (true) {
			var i = 'block scope';
			console.log('Block scope i is: ', i);
		}
	console.log('Function scope i is: ', i);
	return i;
}

practiceFunction();