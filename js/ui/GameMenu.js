

/*
//	Here are the scripts that manage the game menu.
//
//	Also includes game management scripts.
*/

let MAIN_MENU = document.getElementById("main-menu")

let MAIN_MENU_ACCESSED = false


function mainMenu(){
	if (MAIN_MENU_ACCESSED === true){
		MAIN_MENU.className = MAIN_MENU.className.replace(/\bdown\b/g, "")
		MAIN_MENU_ACCESSED = false
		console.log("up")
	} else {
		MAIN_MENU.className = MAIN_MENU.className + " down"
		MAIN_MENU_ACCESSED = true
		console.log("down")
	}
}

function optionsMenu(){
	if(CONTROLLER_STATE !== "options menu"){
		if(CONTROLLER_STATE.includes("menu") === false){
			saveControllerState()
		}
		controllerState("options menu")
		disableButtons(1, 15)
		emptyButtons(1, 15)
		setButton(1, "Change Font")
		enableButton(1)
		setButton(15, "Back")
		enableButton(15, "optionsMenu()")
	} else {
		disableButtons(1, 15)
		emptyButtons(1, 15)
		controllerState("")
		loadSavedControllerState()
	}
}

function newGame(){
	mainMenu()
	clearDisplay()
	clearText()
	addText(`
		<p>Bleh. New game.</p>
	`)
	renderDisplay()
}