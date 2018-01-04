

let partyMenu = document.getElementById("party-menu")
let party = []

function PartyMember(name){
	this.name = name || null
	this.HP = HP || 100
	this.cHP = cHP || 100
	this.MP = MP || 100
	this.cMP = cMP || 100
	this.SP = SP || 100
	this.cSP = cSP || 100
	this.WP = WP || 100
	this.cWP = cWP || 100
}

PartyMember.prototype.addToParty = function(){
	party.push(this)
	displayParty()	
}

function displayParty(){
	party.map(member => {
		attachToMenu(member)
	})
}

function attachToMenu(member){
	let newCard = `
				
	`

	partyMenu.innerHTML += newCard
}

function openMenu(member){
	console.log(member)
}