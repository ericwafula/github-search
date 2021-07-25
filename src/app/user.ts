export class User {
    name:string;
    login:string;
    repo:number;
    constructor(name:string, login:string, repo:number){ 
        this.name = name;
        this.repo = repo;
        this.login = login;
    }
}
