import Game from "./module/Game";
import { innit } from "./DOM";

const playerGrid = document.querySelector(".player");
const computerGrid = document.querySelector(".opponent");

const game = Game();

innit(game.playerBoard, playerGrid);
innit(game.computerBoard, computerGrid);
