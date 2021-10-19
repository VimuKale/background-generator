var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".button-82-pushable");

body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
css.textContent = body.style.background +";";

function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent = body.style.background +";";
}


function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomGradient(){
	var rcolor1 = generateRandomColor();
	var rcolor2 = generateRandomColor();
	body.style.background="linear-gradient(to right,"+rcolor1+","+rcolor2+")";
	css.textContent = body.style.background +";";
	color1.value = rcolor1;
	color2.value = rcolor2;
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

random.addEventListener("click",randomGradient);