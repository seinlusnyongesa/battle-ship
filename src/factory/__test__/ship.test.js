import Ship from "../ship";

describe("tests for ship", () => {
  const ship = Ship(2);
  test("ensure ship has not been hit innitialy", () => {
    expect(ship.timesHit).toBe(0);
  });

  test("increament hits", () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test("isSunk", () => {
    expect(ship.isSunk()).toBe(false);
  });
});
