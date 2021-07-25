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
    this.user = new User("", "");
  }

  getUser(){
    interface ApiResponse{
      firstName:string;
      lastName:string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/${this.name}/access_token=${environment.access_key}`).toPromise().then(response => {
        this.user.firstName = response.firstName;
        this.user.lastName = response.lastName;
        resolve();
      }, error => {
        this.user.firstName = "Clare";
        this.user.lastName = "Limo";
        reject(error);
      })
    })
    return promise;
  }
}
