//play
let gameboard=[0,1,2,3,4,5,6,7,8];
let cells = document.querySelectorAll('.cell');
let winner=false;
let gameplay=null;
var players=[]
var markers=["X","O"];
players[0]="Player1";
players[1]="Player2";
var turn=0;

function play(clicked){
  if(clicked.innerHTML=="&nbsp;"){
  clicked.innerHTML="<span>"+ markers[turn] +"</span>";
  gameboard[clicked.id] = markers[turn];
  let gameWon = checkWin(gameboard)
		if (gameWon) gameOver(gameWon)
    toggle();
  //  document.getElementById("name").innerText = players[turn] + "'s turn...";
		if (checkWin(gameboard) == null) checkTie()

	}

  //win(clicked);
}


//Check Winner
function checkWin(gameboard) {
	let a = gameboard;
	let gameWin = null;
	for (let i = 0; i < 2; i++) {
		if (a[0] + a[1] + a[2] == markers[i].repeat(3)) {
			gameWin = {
				index: 0,
				player: markers[i]
			};
			break;
		}
		if (a[3] + a[4] + a[5] == markers[i].repeat(3)) {
			gameWin = {
				index: 1,
				player: markers[i]
			};
			break;
		}
		if (a[6] + a[7] + a[8] == markers[i].repeat(3)) {
			gameWin = {
				index: 2,
				player: markers[i]
			};
			break;
		}
		if (a[0] + a[3] + a[6] == markers[i].repeat(3)) {
			gameWin = {
				index: 3,
				player: markers[i]
			};
			break;
		}
		if (a[1] + a[4] + a[7] == markers[i].repeat(3)) {
			gameWin = {
				index: 4,
				player: markers[i]
			};
			break;
		}
		if (a[2] + a[5] + a[8] == markers[i].repeat(3)) {
			gameWin = {
				index: 5,
				player: markers[i]
			};
			break;
		}
		if (a[0] + a[4] + a[8] == markers[i].repeat(3)) {
			gameWin = {
				index: 6,
				player: markers[i]
			};
			break;
		}
		if (a[6] + a[4] + a[2] == markers[i].repeat(3)) {
			gameWin = {
				index: 7,
				player: markers[i]
			};
			break;
		}
	}
	return gameWin;
}

function gameOver(gameWon) {
		boxPopupFunction(gameWon.player == markers[0] ? (players[0] + " wins!") : players[1] + " wins!");
		if (gameWon.index == 0) {
			cells[0].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[1].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[2].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 1) {
			cells[3].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[4].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[5].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 2) {
			cells[6].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[7].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[8].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 3) {
			cells[0].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[3].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[6].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 4) {
			cells[1].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[4].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[7].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 5) {
			cells[2].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[5].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[8].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 6) {
			cells[0].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[4].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[8].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		} else if (gameWon.index == 7) {
			cells[6].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[4].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
			cells[2].style.backgroundColor = gameWon.player == markers[0] ? "green" : "blue";
		}
  }

//Track Player
function toggle(){
  if(turn==0){ turn=1;
  }
  else {
    turn=0;
  }
  document.getElementById("name").innerText=players[turn];
}
function reset() {
	location.reload();
}
function boxPopupFunction(text) {
	let x = document.getElementById("text");
	x.style.display = "block";
	x.innerText = "\n" + text;
}
function emptysq() {
	let x = []
	for (let i = 0; i < 9; i++) {
		if ((gameboard[i] != 'X') && (gameboard[i] != 'O')) x.push(i);
	}
	return x;
}
function checkTie() {
	if (emptysq().length == 0) {
		boxPopupFunction("Tie Game!")
	}
}
