

let partyMenu = document.getElementById("party-menu")
let party = []

function PartyMember(name, HP, cHP, MP, cMP, SP, cSP, WP, cWP){

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
	console.log("adding")
	party.push(this)
	displayParty()	
}

function displayParty(){
	console.log("displaying")
	party.map(member => {
		attachToMenu(member)
	})
}

function attachToMenu(member){
	let newCard = `
				<div class="party-member">
					<div class="avatar"></div>
					<div class="status-card">
						<div class="name-card">
							<p class="member-name">${member.name}</p>
						</div>
						<div class="status-bars">
							<div class="health-bar status-bar">
								<p>${member.cHP} / ${member.HP}</p>
							</div>
							<div class="mana-bar status-bar">
								<p>${member.cMP} / ${member.MP}</p>
							</div>
							<div class="stamina-bar status-bar">
								<p>${member.cSP} / ${member.SP}</p>
							</div>
							<div class="willpower-bar status-bar">
								<p>${member.cWP} / ${member.WP}</p>
							</div>
						</div>
					</div>
					<div class="button-menu">
						<div class="party-button">
							<i class="fa fa-user" aria-hidden="true"></i>
						</div>
						<div class="party-button">
							<i class="fa fa-comment" aria-hidden="true"></i>
						</div>
						<div class="party-button">
							<i class="fa fa-suitcase" aria-hidden="true"></i>
						</div>
						<div class="party-button">
							<i class="fa fa-heart" aria-hidden="true"></i>
						</div>
						<div class="party-button">
							<i class="fa fa-arrow-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
	`

	partyMenu.innerHTML += newCard
}

let a = new PartyMember("Ballory",100,100,100,100,100,100,100,100)
a.addToParty()