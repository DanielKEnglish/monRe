

/*
//	Here is where you can manipulate the Controller window.
//
//	Change states to manage clearing buttons using controllerState().
//
//	To activate a button, use setButton() to grant it a label, then enableButton() to give it a script.
//
//	To disable a button, use disableButton() to remove its script, then emptyButton() to remove its label.
*/

let CONTROLLER_STATE = ""
let SAVED_CONTROLLER_STATE = []
let SAVED_CONTROLLER_STATE_NAME = ""

function controllerState(state){
	if (CONTROLLER_STATE !== state){
		CONTROLLER_STATE = state
	} else {
		CONTROLLER_STATE = ""
	}
}

function setButton(button, label){
	let b = document.getElementById(`button-${button}`)
	b.innerHTML = `<p>${label}</p>`
}

function emptyButton(button){
	let b = document.getElementById(`button-${button}`)
	b.innerHTML = ""
}

function enableButton(button, cb){
	let b = document.getElementById(`button-${button}`)
    let classes = b.className.split(" ")

    if (classes.indexOf("enabled") == -1) {
        b.className += " enabled"
        b.setAttribute("onclick", `${cb}`)
    }
}

function disableButton(button){
	let b = document.getElementById(`button-${button}`)
    b.className = b.className.replace(/\benabled\b/g, "")
    b.setAttribute("onclick", "")
}

/*
//	Quality of life additions below.
*/

function emptyButtons(a, b){
	let min, max
	min = Math.min(a,b)
	max = Math.max(a,b)
	if (min !== max){
		for(let i = min; i <= max; i++){
			let c = document.getElementById(`button-${i}`)
			c.innerHTML = ""
		}
	}
}

function disableButtons(a, b){
	let min, max
	min = Math.min(a,b)
	max = Math.max(a,b)
	if (min !== max){
		for(let i = min; i <= max; i++){
			let c = document.getElementById(`button-${i}`)
		    c.className = c.className.replace(/\benabled\b/g, "")
		    c.setAttribute("onclick", "")
		}
	}
}

function saveControllerState(){
	let buttons = []
	for (let i = 1; i <= 15; i++){
		let a = document.getElementById(`button-${i}`)
		let b = {}
		b.name = `button-${i}`
		b.label = a.innerHTML || ""
		b.className = a.className
		b.script = a.getAttribute("onclick")
		buttons.push(b)
	}
	SAVED_CONTROLLER_STATE = buttons
	SAVED_CONTROLLER_STATE_NAME = CONTROLLER_STATE
}

function loadSavedControllerState(){
	let buttons = SAVED_CONTROLLER_STATE
	buttons.map(button => {
		let a = document.getElementById(button.name)
		a.className = button.className
		a.innerHTML = button.label
		a.setAttribute("onclick", button.script)
	})
	CONTROLLER_STATE = SAVED_CONTROLLER_STATE_NAME
	SAVED_CONTROLLER_STATE = []
	SAVED_CONTROLLER_STATE_NAME = ""
}