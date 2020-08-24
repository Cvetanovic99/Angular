export class Answer {
    id: number;
    questionId: number;
    content: string;
    date: Date;

    constructor(id: number, questionId: number, content: string, date: Date) {

        this.id = id;
        this.questionId = questionId;
        this.content = content;
        this.date = date;
    }
}