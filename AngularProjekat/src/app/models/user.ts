export class User {
    id: number;
    name: string;
    surname: string;
    password: string;
    username: string;

    constructor(id: number, name: string, surname: string, password: string, username: string) {
        
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.username = username;
    }
}