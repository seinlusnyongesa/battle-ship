import Player from "../factory/player";
import Gameboard from "../factory/gameBoard";
import Ship from "../factory/ship";

const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

function Game() {
  const player = Player();
  const computer = Player();

  function randomShips(board) {
    // eslint-disable-next-line no-restricted-syntax
    for (const i of ships) {
      const newShip = Ship(i);
      const orientation = randomOrientation();
      let cord = player.getRandomCoordinates(9);

      while (board.canShipBePlaced(cord, newShip, orientation) === false) {
        cord = player.getRandomCoordinates(10);
      }
      board.placeShip(cord, newShip, orientation);
    }
    return board;
  }

  function randomOrientation() {
    const orientation = ["vertical", "horizontal"];
    const random = Math.floor(Math.random() * orientation.length);
    return orientation[random];
  }

  const computerBoard = randomShips(Gameboard());
  const playerBoard = randomShips(Gameboard());
  return {
    randomShips,
    computerBoard,
    playerBoard,
    player,
    computer,
  };
}

export default Game;
