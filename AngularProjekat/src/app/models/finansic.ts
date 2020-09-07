export class Finansic {
    id: number; 
    userId: number;
    income: number;
    spent: number;
    date: Date;

    constructor(id: number, userId: number, income: number, spent: number, date: Date) {
        this.id = id;
        this.userId = userId;
        this.income = income;
        this.spent = spent;
        this.date = date;
    }
}