import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { searchValue } from 'src/variables';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user:User;
  repository: Repository;
  
  constructor(private http:HttpClient) { 
    this.user = new User("", "", "", 0, "", "");
  }

  getUser(name:string){
    interface ApiResponse{
      name:string;
      login:string;
      location: string;
      public_repos: number;
      avatar_url: string;
      html_url: string;
    }

    // let userName = "daneden";

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.url + name + "?client_id=" + environment.client_id + '&client_secret=' + environment.client_secret).toPromise().then(response => {
        this.user.name = response.name;
        this.user.repo = response.public_repos;
        this.user.location = response.location;
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.html_url = response.html_url;
        resolve();
      }, error => {
        this.user.name = "Elon Musk";
        this.user.login = "elonmusk";
        this.user.location = "Kenya"
        this.user.repo = 35;
        this.user.avatar_url = "./assets/Avatar.png"
        reject(error);
      })
    })
    return promise;
  }

  // repo
  getUserRepo(name:string){
    interface ApiResponse{
      name: string;
      html_url: string;
      description: string;
    }

    // let userName = "daneden";
    // handles user repositories
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.url + name + "/repos?client_id=" + environment.client_id + "&client_secret=" + environment.client_secret).toPromise().then(response => {
        this.repository.name = response.name;
        this.repository.html_url = response.html_url;
        this.repository.description = response.description;
        resolve();
      }, error => {
        this.user.name = "Elon Musk";
        this.user.login = "elonmusk";
        this.user.location = "Kenya"
        this.user.repo = 35;
        this.user.avatar_url = "./assets/Avatar.png"
        reject(error);
      })
    })
    return promise;
  }
}
