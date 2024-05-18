export class Prize {
    constructor(level, amount, checkpoint) {
        this.level = level;
        this.amount = amount;
        this.checkpoint = checkpoint;
    }
}

export class Question {
    constructor(level, difficulty, questions) {
        this.level = level;
        this.difficulty = difficulty;
        this.questions = questions;
    }
}

export class SingleQuestion {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}
