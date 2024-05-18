/**
 * Rappresenta un premio nel gioco.
 */
export class Prize {
  /**
   * Crea un'istanza di Prize.
   * @param {number} level - Il livello del premio.
   * @param {number} amount - L'ammontare del premio.
   * @param {boolean} checkpoint - Se il premio è un checkpoint.
   * @param {boolean} [isSelected=false] - Se il premio è stato selezionato.
   */
  constructor(level, amount, checkpoint, isSelected = false) {
    this.level = level;
    this.amount = amount;
    this.checkpoint = checkpoint;
    this.isSelected = isSelected;
  }
}

/**
 * Rappresenta una domanda nel gioco.
 */
export class Question {
  /**
   * Crea un'istanza di Question.
   * @param {number} level - Il livello della domanda.
   * @param {string} difficulty - La difficoltà della domanda.
   * @param {Array} gameQuestions - Un array di domande del gioco.
   */
  constructor(level, difficulty, gameQuestions) {
    this.level = level;
    this.difficulty = difficulty;
    this.gameQuestions = gameQuestions;
  }
}

/**
 * Rappresenta una singola domanda con le opzioni di risposta.
 */
export class SingleQuestion {
  /**
   * Crea un'istanza di SingleQuestion.
   * @param {string} question - Il testo della domanda.
   * @param {Array} options - Le opzioni di risposta.
   * @param {string} correctAnswer - La risposta corretta.
   * @param {boolean} [isSelected=false] - Se la domanda è stata selezionata.
   */
  constructor(question, options, correctAnswer, isSelected = false) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.isSelected = isSelected;
  }
}

/**
 * Rappresenta i dati del gioco, inclusi i premi e le domande.
 */
export class Data {
  /**
   * Crea un'istanza di Data.
   * @param {Array} prizes - Un array di premi.
   * @param {Array} questions - Un array di domande.
   */
  constructor(prizes, questions) {
    this.prizes = prizes;
    this.questions = questions;
  }
}
