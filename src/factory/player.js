function Player() {
  const alreadyHit = new Set();

  function attack(gameboard, cord) {
    if (!alreadyHit.has(JSON.stringify(cord))) {
      alreadyHit.add(JSON.stringify(cord));
      gameboard.receiveAttack(cord);
    }
  }

  function randomAttack(gameboard) {
    let cord = getRandomCoordinates(10);
    while (alreadyHit.has(JSON.stringify(cord))) {
      cord = getRandomCoordinates(10);
    }
    alreadyHit.add(JSON.stringify(cord));
    gameboard.receiveAttack(cord);
  }

  function getRandomCoordinates(size) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    return { x, y };
  }

  return { attack, randomAttack, getRandomCoordinates };
}

export default Player;
