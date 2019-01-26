var mode = 6;
var colors = generateRandomColors(mode);
var square = document.querySelectorAll(".square");
var target = colors[targetPicker()];
var goal = document.getElementById("rgb");
var header = document.getElementById("header");
goal.textContent = target;
var messageDisplay = document.getElementById("message");
var sound = new Audio('sound.mp3');
var refresh = document.getElementById("newColor");
var rookie = document.getElementById("rookie");
var pro = document.getElementById("pro");

rookie.addEventListener("click",function(){
	mode = 3;
	buttonAction(3);
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.backgroundColor=colors[i];
		}else{
			square[i].style.display = "none";
		}
	}//end of for loop
});

pro.addEventListener("click",function(){
	mode = 6;
	buttonAction(6);
	goal.textContent = target;
	for(var i=0;i<square.length;i++){
		square[i].style.display = "block";
		square[i].style.backgroundColor=colors[i];
	}//end of for loop
});

refresh.addEventListener("click", function() {
	// body...
	header.classList.add("animation");
	colors = generateRandomColors(mode);
	target = colors[targetPicker()];
	goal.textContent = target;
	for(var i = 0; i < square.length; i++)
	{
		//add new colors to squares
		square[i].style.backgroundColor=colors[i];
	}//end of for loop
	messageDisplay.textContent = "";
	refresh.innerText="New Colors";
});

//logic for gameplay
for(var i = 0; i < square.length; i++)
	{
		//add initial colors to squares
		square[i].style.backgroundColor=colors[i];

		//add click listeners to squares
		square[i].addEventListener("click", function(){
			//grab clicked color
			var clickedColor = this.style.backgroundColor;	
			//compare the colors
			if(clickedColor === target)
			{	
				header.classList.remove("animation");
				header.style.backgroundColor = target;
				messageDisplay.textContent = "Correct Color!";
				changeSquaresToTarget(target);
				sound.play();
				refresh.innerText="Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}//end of if loop
		})//end of function

	}//end of for loop

	function buttonAction(mode){
		header.classList.add("animation");
		messageDisplay.textContent = "";
		refresh.textContent = "New Colors";
		if(mode===3){
			pro.classList.remove("selected");
			rookie.classList.add("selected");
		}else{
			rookie.classList.remove("selected");
			pro.classList.add("selected");
		}
		colors = generateRandomColors(mode);
		target = colors[targetPicker()];
		goal.textContent = target;
	}

	//function to  change squares into target color
	function changeSquaresToTarget(color){
		for(var i=0; i < square.length; i++){
			square[i].style.backgroundColor=color;
		}
	}

	function targetPicker(){
		var index = Math.floor(Math.random()*colors.length);
		return index;
	}

	function generateRandomColors(num){
		//make an array
		var randomColors = []
		//generate num random colors
		for(var i=0;i<num;i++){
			//generate red from 0-255
			var r=Math.floor(Math.random()*256);
			//generate green from 0-255
			var g=Math.floor(Math.random()*256);
			//generate blue from 0-255
			var b=Math.floor(Math.random()*256);
			//assign rgb to array
			randomColors[i]="rgb("+r+", "+g+", "+b+")";

		}//end of for loop
		//return array
		return randomColors;
	}//end of generateRandomColors

	