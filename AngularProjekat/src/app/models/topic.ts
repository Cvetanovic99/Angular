import { Essay } from './essay';
export class Topic {
    id: number;
    title: string;
    userId: number;
    description: string;
    date: Date;

    constructor(id: number, title: string, userId: number, description: string, date: Date) {
        
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.date = date;
        this.description = description;
        //this.eassays = [];
    }
}