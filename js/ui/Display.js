

const eDisplay = document.getElementById("display-window")

let eDisplayState = null

function clearDisplay(){
	eDisplay.innerHTML = ""
}

function renderDisplay(text){
	eDisplay.innerHTML = text
}