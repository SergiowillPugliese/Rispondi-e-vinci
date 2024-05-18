import { FetchData } from "../shared/FetchData.js";
import { Template } from "./Template.js";
import { Data } from "../shared/DataModel.js";

/**
 * Classe che rappresenta la configurazione iniziale del gioco.
 */
export class GameInitialConfig {
  /**
   * Crea un'istanza di GameInitialConfig.
   */
  constructor() {
    this.prizes = [];
    this.questions = [];
    this.template = new Template();
  }

  /**
   * Inizializza la configurazione del gioco recuperando i premi e le domande,
   * quindi impostando il template della vista di base con i premi recuperati.
   *
   * @returns {Promise<Data>} Una promessa che si risolve con un'istanza di Data contenente premi e domande.
   * @private
   */
  async #init() {
    try {
      const [prizes, questions] = await Promise.all([
        FetchData.getPrizes(),
        FetchData.getQuestions(),
      ]);
      this.prizes = prizes;
      this.questions = questions;
      await this.template.baseViewTemplate(this.prizes);
      return new Data(this.prizes, this.questions);
    } catch (error) {
      console.error("Errore durante l'inizializzazione del gioco:", error);
    }
  }

  /**
   * Avvia il processo di configurazione del gioco.
   *
   * @returns {Promise<Data>} Una promessa che si risolve con un'istanza di Data contenente premi e domande.
   */
  async startGameConfig() {
    return this.#init();
  }
}
