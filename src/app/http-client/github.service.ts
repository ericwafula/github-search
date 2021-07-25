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
    this.user = new User("");
  }

  getUser(){
    interface ApiResponse{
      name:string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/daneden`).toPromise().then(response => {
        this.user.name = response.name;
        resolve();
      }, error => {
        this.user.name = "Clare Limo";
        reject(error);
      })
    })
    return promise;
  }
}
