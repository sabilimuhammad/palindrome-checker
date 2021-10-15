document.getElementById('btn').addEventListener('click',
	function() {
		let str = document.getElementById('input-str').value;
		isPalindrome(str);
	});

function isPalindrome(str) {
	let new_str = str.replace(/[\W_]/g, '').toLowerCase();
	let len = new_str.length;
	let result = document.getElementById('result');
	for( let i=0; i < len; i++) {
		if( new_str[i] !== new_str[len-1-i]) {
			result.textContent = "Unfortunately, It's not a Palindrome :(";
			return;
		}
		result.textContent = "Bullseye, It's Palindrome! :D";
	}
}