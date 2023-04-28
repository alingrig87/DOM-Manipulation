// Accessing elements by ID
const myImage = document.getElementById('myImage');
console.log(myImage);

// Modifying element attributes
const changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', function () {
	myImage.src = 'new_image.jpg';
	myImage.alt = 'New Image';
});
