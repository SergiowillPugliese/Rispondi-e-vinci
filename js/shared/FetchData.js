import { Prize, Question, SingleQuestion } from "./DataModel.js";

export class FetchData {
  static async getPrizes() {
    try {
      const response = await fetch("../../JSON/prizes.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.prizes.map(
        (prize) => new Prize(prize.level, prize.amount, prize.checkpoint)
      );
    } catch (error) {
      console.error("Failed to fetch prizes:", error);
      return [];
    }
  }

  static async getQuestions() {
    try {
      const response = await fetch("../../JSON/questions.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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
      console.error("Failed to fetch questions:", error);
      return [];
    }
  }
}
