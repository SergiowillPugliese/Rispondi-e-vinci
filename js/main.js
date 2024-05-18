import { GameInitialConfig } from "./core/GameInitialConfig.js";
import { Game } from "./game/Game.js";

async function initGameConfig() {
  console.log("Starting the game...");
  const gameInitialConfig = new GameInitialConfig();
  const data = await gameInitialConfig.startGameConfig();
  const game = new Game(data);
}

initGameConfig();
