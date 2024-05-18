import { Utils } from "../shared/Utils.js";

export class Game {
  constructor(data) {
    this.data = data;
    console.log("Game initialized with data:", this.data);
  }

  startGame() {
    gameSection = Utils.createElement({ tagName: "div", id: "gameSection" });
  }
}
