// Accessing elements by ID
const myParagraph = document.getElementById('myParagraph');
console.log(myParagraph);

// Adding a class
const addClassButton = document.getElementById('addClassButton');
addClassButton.addEventListener('click', function () {
	myParagraph.classList.add('custom-class');
});

// Removing a class
const removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function () {
	myParagraph.classList.remove('custom-class');
});
