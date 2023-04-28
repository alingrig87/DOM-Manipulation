// Accessing the element by ID
const myContainer = document.getElementById('myContainer');

// Creating new elements
const heading = document.createElement('h2');
heading.textContent = 'New Heading';
myContainer.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph.';
myContainer.appendChild(paragraph);

const nestedDiv = document.createElement('div');
nestedDiv.classList.add('nested');
myContainer.appendChild(nestedDiv);

const nestedHeading = document.createElement('h3');
nestedHeading.textContent = 'Nested Heading';
nestedDiv.appendChild(nestedHeading);

const nestedParagraph = document.createElement('p');
nestedParagraph.textContent = 'This is a nested paragraph.';
nestedDiv.appendChild(nestedParagraph);
