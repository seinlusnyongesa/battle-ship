function Ship(length, timesHit = 0) {
  const ship = {};
  ship.length = length;
  ship.timesHit = timesHit;
  ship.hit = function () {
    ship.timesHit += 1;
    return ship.timesHit;
  };
  ship.isSunk = function () {
    return ship.length <= ship.timesHit;
  };
  return ship;
}

module.exports = Ship;
