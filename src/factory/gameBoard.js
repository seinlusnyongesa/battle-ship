import Ship from "./ship";

function Gameboard() {
  const board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  let missed = [];
  function placeShip(cord, ship, side) {
    if (side === "vertical") {
      for (let i = 0; i < ship.length; i += 1) {
        board[cord.x + i].splice(cord.y, 1, ship);
      }
    }
    if (side === "horizontal") {
      for (let i = 0; i < ship.length; i += 1) {
        board[cord.x].splice(cord.y + i, 1, ship);
      }
    }

    return true;
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

  function canShipBePlaced(cord, ship, side) {
    let neighborCells = [];
    if (side === "vertical") {
      if (
        cord.x < 0 ||
        cord.x + ship.length >= 10 ||
        cord.y < 0 ||
        cord.y >= 10
      ) {
        return false;
      }
      if (cord.x - 1 >= 0 && cord.x + ship.length < 10) {
        neighborCells = [
          ...neighborCells,
          board[cord.x - 1][cord.y],
          board[cord.x + ship.length][cord.y],
        ];
      }

      for (let i = cord.x; i < cord.x + ship.length; i++) {
        neighborCells = [
          ...neighborCells,
          board[i][cord.y - 1],
          board[i][cord.y + 1],
        ];
      }
    }
    if (side === "horizontal") {
      if (
        cord.y < 0 ||
        cord.y + ship.length >= 10 ||
        cord.x < 0 ||
        cord.x >= 10
      ) {
        return false;
      }
      if (cord.y - 1 >= 0 && cord.y + 1 < 10) {
        neighborCells = [
          ...neighborCells,
          board[cord.x][cord.y - 1],
          board[cord.x][cord.y + ship.length],
        ];
      }
      for (let i = cord.y; i < cord.y + ship.length; i++) {
        neighborCells = [
          ...neighborCells,
          board[cord.x - 1][i],
          board[cord.x + 1][i],
        ];
      }
    }
    return neighborCells
      .filter((v) => v !== undefined)
      .every((v) => v === null);
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
    canShipBePlaced,
  };
}

export default Gameboard;
