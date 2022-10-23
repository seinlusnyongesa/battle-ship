import Game from "./Game";
import Ship from "../factory/ship";
import Gameboard from "../factory/gameBoard";
import Player from "../factory/player";

describe("test game", () => {
  let playerBoard;

  let game;
  beforeEach(() => {
    playerBoard = Gameboard();
    game = Game();

    game.randomShips(playerBoard);
  });

  test("player board should have ships", () => {
    expect(playerBoard.allShipsSunk()).toBe(false);
  });
});
