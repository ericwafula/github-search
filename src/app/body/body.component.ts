import { Component, OnInit } from '@angular/core';
// import { Search } from '../search-class/search';
import { GithubService } from '../http-client/github.service';
import { User } from '../user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user: User;

  constructor(public userService: GithubService) { }

  submitQuery(userName:string){
    let user = userName;
    this.userService.getUser(user)
  }
  
  ngOnInit(): void {
  }

}
