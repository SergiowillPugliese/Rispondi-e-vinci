import { Prize, Question, SingleQuestion } from "./DataModel.js";

/**
 * La classe FetchData gestisce il recupero dei dati dai file JSON.
 */
export class FetchData {
  /**
   * Recupera i premi dal file JSON.
   * @returns {Promise<Array<Prize>>} Una promessa che risolve con un array di oggetti Prize.
   */
  static async getPrizes() {
    try {
      const response = await fetch("../../JSON/prizes.json");
      if (!response.ok) {
        throw new Error(`Errore HTTP! stato: ${response.status}`);
      }
      const data = await response.json();
      return data.prizes.map(
        (prize) => new Prize(prize.level, prize.amount, prize.checkpoint)
      );
    } catch (error) {
      console.error("Impossibile recuperare i premi:", error);
      return [];
    }
  }

  /**
   * Recupera le domande dal file JSON.
   * @returns {Promise<Array<Question>>} Una promessa che risolve con un array di oggetti Question.
   */
  static async getQuestions() {
    try {
      const response = await fetch("../../JSON/questions.json");
      if (!response.ok) {
        throw new Error(`Errore HTTP! stato: ${response.status}`);
      }
      const data = await response.json();
      return data.questions.map(
        (x) =>
          new Question(
            x.level,
            x.difficulty,
            x.gameQuestions.map(
              (y) => new SingleQuestion(y.question, y.options, y.correctAnswer)
            )
          )
      );
    } catch (error) {
      console.error("Impossibile recuperare le domande:", error);
      return [];
    }
  }
}
