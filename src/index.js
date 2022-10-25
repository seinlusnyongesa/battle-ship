import Game from "./module/Game";
import { innit } from "./DOM";

const playerGrid = document.querySelector(".player");
const computerGrid = document.querySelector(".opponent");

const game = Game();
innit(game.playerBoard, playerGrid, "player");
innit(game.computerBoard, computerGrid, "computer");

function playerChoice(e) {
  if (e.target && e.target.className.includes("cell")) {
    const x = Number(e.target.getAttribute("data-x"));
    const y = Number(e.target.getAttribute("data-y"));

    const cord = { x, y };
    const infor = game.player.attack(game.computerBoard, cord);

    if (infor === "hit") {
      e.target.className += " hit";
      //   computerGrid.removeEventListener("click", playerChoice);
      if (game.computerBoard.allShipsSunk()) {
        alert("you win");
        game = Game();
      }
    } else if (infor === "miss") {
      e.target.className += " miss";

      //   computerGrid.removeEventListener("click", playerChoice);
    }
  }
}

function computerChoice() {}

function gameLoop() {
  const currentPlayer = game.player;
  if (currentPlayer === game.player) {
    computerGrid.addEventListener("click", playerChoice);
  }
  if (currentPlayer === game.computer) {
  }
}
// while (
//   game.playerBoard.allShipsSunk() === false ||
//   game.computerBoard.allShipsSunk() === false
// ) {

// }
window.addEventListener("DOMContentLoaded", gameLoop());
