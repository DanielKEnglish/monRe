

/*
//	This is the initialize script.
//
//	Here is where the scripts that load straight away work.
//
//	This script is always at the bottom of the script load order so it can call functions from other scripts.
*/

window.onload = initialize()

function initialize(){
	gameResize()
	loadWelcomeScreen()
}

function loadWelcomeScreen(){
	clearText()
	addText(`
		<p class="right">v 0.0.7</p>
		<br/>
		<br/>
		<p>Welcome to <b>monRe</b>, a HTML-based text game.</p>
		<br/>
		<p><b>monRe</b> is the work on an amateur, and thus should be treated as such. You will find bad-practice coding, too much DOM manipulation, and poor design choices.</p>
		<br/>
		<p>Still, if you find yourself enjoying this work, please let me know! :)</p>
		<br/>
		<br/>
		<p><b>monRe</b> is still in its earliest stages of development, so expect many bugs and missing features.</p>
		<br/>
		<p>Should you wish to contribute, visit <a href="https://www.github.com/DanielKEnglish/monRe">the repo on Github</a> or drop a message in QQ.</p>
		<br/>
		<p>Many thanks for visiting.</p>
		<br/>
		<p class="signature">- Daniel K. English</p>
	`)
	renderDisplay()

	setButton(1, "Main Menu")
	enableButton(1, "mainMenu()")
}

function gameResize(){
	let scale = Math.min(window.innerHeight / GAME_HEIGHT, window.innerWidth / GAME_WIDTH)
	GAME_WINDOW.style.transform = `translateY(-${(1 - scale) * 50}%) scale(${scale})`
}
