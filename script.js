function firstNonRepeatedChar(str) {
 // Write your code here
		let freq = {};

	// count frequency
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		freq[ch] = (freq[ch] || 0) + 1;
	}

	// find first non-repeating
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		if (freq[ch] === 1) {
			return ch;
		}
	}

	return null;
}
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
