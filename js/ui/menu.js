

function openUserMenu(user){
	if (eDisplayState !== `${user.name} user`){
		clearDisplay()
		renderDisplay(`
			<p>User Menu opened for ${user.name}</p>
		`)
		eDisplayState = `${user.name} user`		
	} else {
		clearDisplay()
		opened = null
	}
}

function openTalkMenu(user){
	if (eDisplayState !== `${user.name} talk`){
		clearDisplay()
		renderDisplay(`
			<p>Talk Menu opened for ${user.name}</p>
		`)
		eDisplayState = `${user.name} talk`		
	} else {
		clearDisplay()
		eDisplayState = null
	}
}

function openItemMenu(user){
	if (eDisplayState !== `${user.name} item`){
		clearDisplay()
		renderDisplay(`
			<p>Item Menu opened for ${user.name}</p>
		`)
		eDisplayState = `${user.name} item`		
	} else {
		clearDisplay()
		eDisplayState = null
	}
}

function openBondMenu(user){
	if (eDisplayState !== `${user.name} bond`){
		clearDisplay()
		renderDisplay(`
			<p>Bond Menu opened for ${user.name}</p>
		`)
		eDisplayState = `${user.name} bond`		
	} else {
		clearDisplay()
		eDisplayState = null
	}
}

function openLeaveMenu(user){
	if (eDisplayState !== `${user.name} leave`){
		clearDisplay()
		renderDisplay(`
			<p>Leave Menu opened for ${user.name}</p>
		`)
		eDisplayState = `${user.name} leave`		
	} else {
		clearDisplay()
		eDisplayState = null
	}
}