
/*
//
//	This file handles minimap rendering logic.
//
//	Rendering logic includes both the "camera" movement and the clear/draw.
//
//	First, the minimap detects what map Player is on.
// 
//	Next, it takes that map's layout data from Map.
//
//	Then, using the values on the layout, it pans the "camera" and renders the map.
//
*/

/* SETUP */

	const eMinimap = document.getElementById("minimap")
	const ctx = eMinimap.getContext("2d")

/*=======*/

dummyMap[Player.x][Player.y] = 1 

window.addEventListener("keydown", parseKey)
window.onload = function(){
	ctx.translate(94 - (Player.x * 52), 94 - (Player.y * 52))
	drawMap(dummyMap)
}

function parseKey(event){
	switch(event.code){
		case "KeyW":
			if(Player.x > 0){
				Player.x -= 1
				moveCam(event.code)
			}
			setMap(dummyMap)
		break;
		case "KeyA":
			if(Player.y > 0){
				Player.y -= 1
				moveCam(event.code)
			}
			setMap(dummyMap)
		break;
		case "KeyS":
			if(Player.x < dummyMap.length - 1){
				Player.x += 1
				moveCam(event.code)
			}
			setMap(dummyMap)
		break;
		case "KeyD":
			if(Player.y < dummyMap.length - 1){
				Player.y += 1
				moveCam(event.code)
			}
			setMap(dummyMap)
		break;
		case "Space":
			console.log("space")
		break;
		default:
		break;
	}
}

function moveCam(code){
	switch(code){
		case "KeyW":
			ctx.clearRect(0, 0, (dummyMap.length * 51) + 1, (dummyMap.length * 51) + 1)
			ctx.translate(0, 51)
		break;
		case "KeyA":
			ctx.clearRect(0, 0, (dummyMap.length * 51) + 1, (dummyMap.length * 51) + 1)
			ctx.translate(51, 0)
		break;
		case "KeyS":
			ctx.clearRect(0, 0, (dummyMap.length * 51) + 1, (dummyMap.length * 51) + 1)
			ctx.translate(0, -51)
		break;
		case "KeyD":
			ctx.clearRect(0, 0, (dummyMap.length * 51) + 1, (dummyMap.length * 51) + 1)
			ctx.translate(-51, 0)
		break;
		default:
		break;
	}
}

function setMap(map){
	map.map(row => {
		row.fill(0)	
	})
	map[Player.x][Player.y] = 1
	drawMap(dummyMap)
}

function drawMap(map){

	ctx.fillStyle = "#FFFFFF"
	ctx.fillRect(0, 0, (map.length * 51) + 1, (map.length * 51) + 1)

	for(let row = 0; row < map.length; row++){
		for(let column = 0; column < map[row].length; column++){
			if(map[row][column] >= 0){
				ctx.fillStyle = "#FFFFFF"
				ctx.fillRect(column * 51, row * 51, 51, 51)
				if(map[row][column] === 1){
					ctx.fillStyle = "#FF0000"
				} else {
					ctx.fillStyle = "#000000"
				}
				ctx.fillRect((column * 51) + 1, (row * 51) + 1, 50, 50)
			} else {
				ctx.fillStyle = "#000000"
				ctx.fillRect(column * 52, row * 52, 52, 52)
			}
		}
	}

}