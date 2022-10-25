import Game from "./Game";
import Ship from "../factory/ship";
import Gameboard from "../factory/gameBoard";
import Player from "../factory/player";

describe("test game", () => {
  let game;
  beforeEach(() => (game = Game()));

  test("player board should have ships", () => {
    const { playerBoard } = game;
    expect(playerBoard.allShipsSunk()).toBe(false);
  });

  test("computer board should have ships", () => {
    const { computerBoard } = game;
    expect(computerBoard.allShipsSunk()).toBe(false);
  });
});
