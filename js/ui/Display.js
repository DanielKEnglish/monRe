

/*
//	Here is where you can manipulate the Display window.
//
//	There are three primary functions to use: clearDisplay(), addText(), renderDisplay().
//
//	clearDisplay() clears the Display window.
//
//	addQueue() adds a line of text into a queue.
//
//	clearQueue() clears the queue.
//
//	renderDisplay() puts the text in the queue on-screen.
//
//  displayState() manages the Display window's state. This is how you toggle/switch windows.
*/

let DISPLAY_STATE = null
let DISPLAY_TEXT = ""

function clearDisplay(){
	DISPLAY.innerHTML = ""
}

function addText(text){
	DISPLAY_TEXT += text
}

function clearText(){
	DISPLAY_TEXT = ""
}

function renderDisplay(){
	DISPLAY.innerHTML = DISPLAY_TEXT
}

function displayState(state){
	if (DISPLAY_STATE === state){
		DISPLAY_STATE = null
	} else {
		DISPLAY_STATE = state
	}
}