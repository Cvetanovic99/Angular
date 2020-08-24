export class Essay {
    id: number;
    topicId: number;
    content: string;
    essayTopic: string;
    date: Date;

    constructor(id: number, topicId: number, content: string, essayTopic: string, date: Date) {
        
        this.id = id;
        this.topicId = topicId;
        this.content = content;
        this.essayTopic = essayTopic
        this.date = date;
    }
}