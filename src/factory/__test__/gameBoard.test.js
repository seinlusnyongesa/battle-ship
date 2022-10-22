import Gameboard from "../gameBoard";
import Ship from "../ship";

describe("test the gameboard", () => {
  const board = Gameboard();
  const ship = Ship(2);
  test("board should be of length 10", () => {
    expect(board.board.length).toBe(10);
  });

  test("board at index 0 to be of length 10", () => {
    expect(board.board[0].length).toBe(10);
  });

  test("is ship placed", () => {
    expect(board.placeShip({ x: 4, y: 3 }, ship).length).toBe(2);
  });

  test("check if cordinates contain ship", () => {
    expect(board.containsShip({ x: 4, y: 4 })).toBe(true);
  });

  test("receive hitting Attack", () => {
    expect(board.receiveAttack({ x: 4, y: 4 })).toBe(1);
  });

  test("receive missing Attack", () => {
    expect(board.receiveAttack({ x: 4, y: 3 })).toEqual(2);
  });

  test("find whether ships sunk", () => {
    expect(board.allShipsSunk()).toBe(true);
  });
});
