export class QuestionManager {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestion = null;
        this.usedQuestions = new Set();
    }

    getQuestionForLevel(level) {
        const levelQuestions = this.questions.find(q => q.level === level);
        if (!levelQuestions) return null;

        const availableQuestions = levelQuestions.gameQuestions.filter(
            q => !this.usedQuestions.has(q.question)
        );

        if (availableQuestions.length === 0) {
            this.usedQuestions.clear();
            this.currentQuestion = this.getRandomQuestion(levelQuestions.gameQuestions);
        } else {
            this.currentQuestion = this.getRandomQuestion(availableQuestions);
        }

        this.usedQuestions.add(this.currentQuestion.question);
        return this.currentQuestion;
    }

    getRandomQuestion(questions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    checkAnswer(selectedAnswer) {
        return this.currentQuestion && this.currentQuestion.correctAnswer === selectedAnswer;
    }
}