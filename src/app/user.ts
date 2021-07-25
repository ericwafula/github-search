export class User {
    name:string;
    login:string;
    repo:number;
    location: string;
    avatar_url: string;
    constructor(name:string, login:string, location:string, repo:number, avatar_url:string){ 
        this.name = name;
        this.repo = repo;
        this.login = login;
        this.location = location;
        this.avatar_url = avatar_url;
    }
}
