import { FetchData } from "../shared/FetchData.js";
import { Template } from "./Template.js";
import { Data } from "../shared/DataModel.js";

export class GameInitialConfig {
  prizes = [];
  questions = [];
  template = new Template();

  constructor() {}

  async #init() {
    try {
      this.prizes = await FetchData.getPrizes();
      this.questions = await FetchData.getQuestions();
      await this.template.baseViewTemplate(this.prizes);
      return new Data(this.prizes, this.questions);
    } catch (error) {
      console.error("Error initializing the game:", error);
    }
  }

  async startGameConfig() {
    try {
      return await this.#init();
    } catch (error) {
      console.error("Error starting the game:", error);
    }
  }
}
