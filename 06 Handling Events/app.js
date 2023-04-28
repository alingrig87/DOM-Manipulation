// Accessing elements by ID
const myInput = document.getElementById('myInput');
const myParagraph = document.getElementById('myParagraph');
const myDiv = document.getElementById('myDiv');

// Handling input event
myInput.addEventListener('input', function () {
	console.log('Input changed: ' + myInput.value);
});

// Handling change event
myInput.addEventListener('change', function () {
	console.log('Input value changed: ' + myInput.value);
});

// Handling click event for paragraph
myParagraph.addEventListener('click', function () {
	console.log('Paragraph clicked');
});

// Handling mouseover event for div
myDiv.addEventListener('mouseover', function () {
	console.log('Mouse over the div');
});
