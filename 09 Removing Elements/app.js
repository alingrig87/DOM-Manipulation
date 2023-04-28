// Accessing the elements by ID
const myList = document.getElementById('myList');
const removeButton = document.getElementById('removeButton');
const removeAllButton = document.getElementById('removeAllButton');

// Removing a single element
removeButton.addEventListener('click', function () {
	const listItem = myList.firstElementChild;
	if (listItem) {
		listItem.remove();
	}
});

// Removing all child elements
removeAllButton.addEventListener('click', function () {
	while (myList.firstChild) {
		myList.removeChild(myList.firstChild);
	}
});
