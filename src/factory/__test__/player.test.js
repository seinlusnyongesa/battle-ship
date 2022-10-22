import Player from "../player";
import Gameboard from "../gameBoard";

import Ship from "../ship";

describe("player", () => {
  let player;
  let gameBoard;
  let ship;
  beforeEach(() => {
    player = Player();
    gameBoard = Gameboard();
    ship = Ship(2);
    gameBoard.placeShip({ x: 2, y: 1 }, ship);
  });

  test("test attack ship", () => {
    player.attack(gameBoard, { x: 2, y: 1 });
    player.attack(gameBoard, { x: 2, y: 2 });
    expect(gameBoard.allShipsSunk()).toBe(true);
  });

  test("random attack ship", () => {
    for (let i = 0; i < 100; i++) {
      player.randomAttack(gameBoard);
    }
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});
