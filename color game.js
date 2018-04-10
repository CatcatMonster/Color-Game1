var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementById("backgroundColor");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#233333"
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	 numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "#233333"
});

resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	//colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#233333";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];	//add click listeners to squares

	squares[i].addEventListener("click",function(){ 
		var clickedColor = this.style.backgroundColor;//grab color of clicked square
		
		if (clickedColor === pickedColor) {	//compare color to pickedColor
			messageDisplay.textContent = "Collect!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}else {
			this.style.backgroundColor = "#233333";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop through all squares 
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color; //change each color to match given color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}