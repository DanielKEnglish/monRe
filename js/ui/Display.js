

const eDisplay = document.getElementById("text-container")

let eDisplayState = null

function clearDisplay(){
	eDisplay.innerHTML = ""
}

function renderDisplay(text){
	eDisplay.innerHTML = text
}