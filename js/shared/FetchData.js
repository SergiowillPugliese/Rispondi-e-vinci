import { Prize, Question, SingleQuestion } from './DataModel.js';

export class FetchData {

    async getPrizes() {
        try {
            const response = await fetch('../../JSON/prizes.json');
            const data = await response.json();
            return data.prizes.map(prize => new Prize(prize.level, prize.amount, prize.checkpoint));
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async getQuestions() {
        try {
            const response = await fetch('../../JSON/questions.json');
            const data = await response.json();
            return data.questions.map(question => new Question(question.level, question.difficulty, question.questions));
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}