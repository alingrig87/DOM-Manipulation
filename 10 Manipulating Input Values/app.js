// Accessing the elements by ID
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const capitalizeButton = document.getElementById('capitalizeButton');
const reverseButton = document.getElementById('reverseButton');

// Capitalize the input value
capitalizeButton.addEventListener('click', function () {
	const inputValue = inputField.value;
	const capitalizedValue = inputValue.toUpperCase();
	outputField.textContent = capitalizedValue;
});

// Reverse the input value
reverseButton.addEventListener('click', function () {
	const inputValue = inputField.value;
	const reversedValue = reverseString(inputValue);
	outputField.textContent = reversedValue;
});

// Function to reverse a string
function reverseString(str) {
	return str.split('').reverse().join('');
}
