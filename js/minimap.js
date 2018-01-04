

const minimap = document.getElementById("minimap")
const ctx = minimap.getContext("2d")

window.addEventListener("keydown", parseKey)

let dummyMap = [
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
]

let Player = [0,0]

function parseKey(event){
	switch(event.code){
		case "KeyW":
			Player[0] -= 1
		break;
		case "KeyA":
			Player[1] -= 1
		break;
		case "KeyS":
			Player[0] += 1
		break;
		case "KeyD":
			Player[1] += 1
		break;
		case "Space":
			console.log("space")
		break;
		default:
		break;
	}
	setMap(dummyMap)
}

function setMap(map){
	map.map(row => {
		row.fill(0)	
	})
	console.log(map[Player[0]])
	map[Player[0]][Player[1]] = 1
	drawMap(dummyMap)
}

function drawMap(map){

	for(let row = 0; row < map.length; row++){
		for(let column = 0; column < map[row].length; column++){
			ctx.fillStyle = "#FFFFFF"
			ctx.fillRect(column * 52, row * 52, 52, 52)
			if(map[row][column] === 1){
				ctx.fillStyle = "#FF0000"
			} else {
				ctx.fillStyle = "#000000"
			}
			ctx.fillRect((column * 52) + 1, (row * 52) + 1, 50, 50)
		}
	}

}