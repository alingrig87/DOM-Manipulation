// app.js for folder 04

// Accessing elements by ID
const myParagraph = document.getElementById('myParagraph');
console.log(myParagraph);

// Toggling CSS classes
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
	myParagraph.classList.toggle('red');
});

// Toggling CSS styles using the style attribute
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
	if (myParagraph.style.color === 'red') {
		myParagraph.style.color = '';
	} else {
		myParagraph.style.color = 'red';
	}
});
