// Accessing elements by ID
const myList = document.getElementById('myList');
const addButton = document.getElementById('addButton');

// Traversing and modifying the DOM tree
addButton.addEventListener('click', function () {
	// Create a new list item
	const newItem = document.createElement('li');
	newItem.textContent = 'New Item';

	// Add the new item to the end of the list
	myList.appendChild(newItem);

	// Accessing parent element
	const listParent = myList.parentNode;
	console.log('Parent Element:', listParent);

	// Accessing previous sibling
	const previousItem = newItem.previousElementSibling;
	console.log('Previous Sibling:', previousItem);

	// Accessing next sibling
	const nextItem = newItem.nextElementSibling;
	console.log('Next Sibling:', nextItem);

	// Modifying the text content of an element
	newItem.textContent = 'Modified Item';

	// Modifying the attribute of an element
	newItem.setAttribute('class', 'highlight');

	// Removing an element
	previousItem.remove();
});
