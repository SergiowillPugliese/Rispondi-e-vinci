export class Prize {
  constructor(level, amount, checkpoint, isSelected = false) {
    this.level = level;
    this.amount = amount;
    this.checkpoint = checkpoint;
    this.isSelected = isSelected;
  }
}

export class Question {
  constructor(level, difficulty, gameQuestions) {
    this.level = level;
    this.difficulty = difficulty;
    this.gameQuestions = gameQuestions;
  }
}

export class SingleQuestion {
  constructor(question, options, correctAnswer, isSelected = false) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.isSelected = isSelected;
  }
}

export class Data {
  constructor(prizes, questions) {
    this.prizes = prizes;
    this.questions = questions;
  }
}
