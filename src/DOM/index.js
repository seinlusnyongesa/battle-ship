// create my board
// create opponent board

function innit(board, grid, type) {
  const boardDiv = document.createElement("div");
  boardDiv.classList.add("board");

  for (let i = 0; i < board.board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board.board.length; j++) {
      const cell = document.createElement("div");
      if (type === "player" && board.board[i][j] !== null) {
        cell.classList.add("ship");
      }
      cell.classList.add("cell");
      cell.setAttribute("data-x", i);
      cell.setAttribute("data-y", j);
      row.appendChild(cell);
    }
    boardDiv.appendChild(row);
  }

  grid.appendChild(boardDiv);
}

module.exports = { innit };
