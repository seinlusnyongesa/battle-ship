import Ship from "./ship";

// const SHIP_TYPES = {
//   ship4: 1,
//   ship3: 2,
//   ship2: 3,
//   ship1: 4,
// };

function Gameboard() {
  const board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  let missed = [];
  function placeShip(cord, ship) {
    for (let i = 0; i < ship.length; i += 1) {
      board[cord.x].splice(cord.y + i, 1, ship);
    }

    return board[cord.x][cord.y];
  }

  function receiveAttack(cord) {
    if (containsShip(cord)) {
      return board[cord.x][cord.y].hit();
    }
    missed = [...missed, cord];
    return cord;
  }

  function containsShip(cord) {
    return board[cord.x][cord.y] !== null;
  }

  function allShipsSunk() {
    const ships = board
      .map((v) => v.filter((t) => t !== null))
      .filter((t) => t.length !== 0)
      .map((v) => v.map((f) => f.isSunk()))
      .map((v) => v.some((s) => s === true));

    return ships.every((s) => s === true);
  }

  return {
    board,
    placeShip,
    containsShip,
    receiveAttack,
    allShipsSunk,
  };
}

module.exports = Gameboard;
