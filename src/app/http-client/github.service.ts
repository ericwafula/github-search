import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user:User;
  name:string = "ericwafula";
  
  constructor(private http:HttpClient) { 
    this.user = new User("", "", "", 0, "");
  }

  getUser(){
    interface ApiResponse{
      name:string;
      login:string;
      location: string;
      public_repos: number;
      avatar_url: string
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/daneden`).toPromise().then(response => {
        this.user.name = response.name;
        this.user.repo = response.public_repos;
        this.user.location = response.location;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        resolve();
      }, error => {
        this.user.name = "Clare Limo";
        this.user.login = "clarelimo";
        this.user.location = "Kenya"
        this.user.repo = 35;
        this.user.avatar_url = "./assets/Avatar.png"
        reject(error);
      })
    })
    return promise;
  }
}
