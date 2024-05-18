import { GameInitialConfig } from "./core/GameInitialConfig.js";
import { Game } from "./game/Game.js";

/**
 * Inizializza la configurazione del gioco e avvia il gioco.
 *
 * La funzione logga un messaggio di avvio, crea un'istanza di `GameInitialConfig`,
 * recupera i dati iniziali della configurazione del gioco e avvia una nuova istanza del gioco con i dati ottenuti.
 */
async function initGameConfig() {
  console.log("Starting the game...");
  const gameInitialConfig = new GameInitialConfig();
  const data = await gameInitialConfig.startGameConfig();
  const game = new Game(data);
}

initGameConfig();
