// select your elements first - what is the user going to interact with?
// there are the targets ==> these are what the "user" uses 

// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton")

// this is a 1 to many connection to an element in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {

	let newBGPath = "images/backGround" + this.id + ".jpg";

	//url('../images/backGround0.jpg')
	//debugger;
	// object.property = "new value"
	// theHeadline.textContent = "Drag and Drop is FUN!";
	// theHeadline.style.color = "orange";
	// theHeadline.classList.add('orange-headline')

	// change the bg image in the drop zone
	// puzzleBoard.style.backgroundImage = 'url("../images/backGround" '+ this.id +' ".jpg")';

	// change the bg image in the drop zone
	// the ${} is called a Javascript Template string - whatever is inside the curly
	// braces is evaluated at runtime and interpolated (replaces the bracket notation)
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// event handling at the bottom ==> how things react when you
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling:
// let navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));