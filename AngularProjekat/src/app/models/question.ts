import { Answer } from "./answer";

export class Question {
    id: number;
    userId: number;
    content: string;
    description: string;
    //answers: Answer [];
    date: Date;

    constructor(id: number, userId: number, content: string, description: string, date: Date) {

        this.id = id;
        this.userId = userId;
        this.content = content;
        this.description = description;
        //this.answers = [];
        this.date = date;
    }
}