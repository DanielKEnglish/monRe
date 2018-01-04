

/*
//
//	This is Player.js, a template that holds your character's progression.
//
*/

let partyMenu = document.getElementById("party-menu")

let party = []

function displayParty(){
	party.map(member => {
		attachToMenu(member)
	})
}

function attachToMenu(character){
	let newCard = `
				<div id="${character.ref}" class="party-member">
					<div class="avatar">
						<img src="${character.avatar}">
					</div>
					<div class="status-card">
						<div class="name-card">
							<p class="member-name">${character.name}</p>
						</div>
						<div class="status-bars">
							<div class="health-bar status-bar">
								<p>${character.cHP} / ${character.mHP}</p>
							</div>
							<div class="mana-bar status-bar">
								<p>${character.cMP} / ${character.mMP}</p>
							</div>
							<div class="stamina-bar status-bar">
								<p>${character.cSP} / ${character.mSP}</p>
							</div>
							<div class="willpower-bar status-bar">
								<p>${character.cWP} / ${character.mWP}</p>
							</div>
						</div>
					</div>
					<div class="button-menu">
						<div class="party-button" onclick="openUserMenu(${character.name})">
							<i class="fa fa-user" aria-hidden="true"></i>
						</div>
						<div class="party-button" onclick="openTalkMenu(${character.name})">
							<i class="fa fa-comment" aria-hidden="true"></i>
						</div>
						<div class="party-button" onclick="openItemMenu(${character.name})">
							<i class="fa fa-suitcase" aria-hidden="true"></i>
						</div>
						<div class="party-button" onclick="openBondMenu(${character.name})">
							<i class="fa fa-heart" aria-hidden="true"></i>
						</div>
						<div class="party-button" onclick="openLeaveMenu(${character.name})">
							<i class="fa fa-arrow-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>				
	`

	partyMenu.innerHTML += newCard
}

function openMenu(member){
	console.log(member)
}

let Player = {}

	Player.name = "Player"
	Player.ref = "pmPlayer"
	Player.avatar = "./assets/avatars/player.png"

	Player.cHP = 20
	Player.cMP = 20
	Player.cSP = 20
	Player.cWP = 20

	Player.mHP = 20
	Player.mMP = 20
	Player.mSP = 20
	Player.mWP = 20

/* MAP HANDLING */

	Player.map = null
	Player.x = 0
	Player.y = 0

let PlayerF = {}

	PlayerF.name = "PlayerF"
	PlayerF.ref = "pmPlayerF"
	PlayerF.avatar = "./assets/avatars/playerf.png"

	PlayerF.cHP = 20
	PlayerF.cMP = 20
	PlayerF.cSP = 20
	PlayerF.cWP = 20

	PlayerF.mHP = 20
	PlayerF.mMP = 20
	PlayerF.mSP = 20
	PlayerF.mWP = 20

/* MAP HANDLING */

	PlayerF.map = null
	PlayerF.x = 0
	PlayerF.y = 0





party.push(Player)
party.push(PlayerF)

displayParty()	