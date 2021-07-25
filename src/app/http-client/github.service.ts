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
    this.user = new User("", "", 0);
  }

  getUser(){
    interface ApiResponse{
      name:string;
      login:string;
      public_repos: number;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/daneden`).toPromise().then(response => {
        this.user.name = response.name;
        this.user.repo = response.public_repos;
        this.user.login = response.login;
        resolve();
      }, error => {
        this.user.name = "Clare Limo";
        this.user.login = "clarelimo";
        this.user.repo = 35;
        reject(error);
      })
    })
    return promise;
  }
}
