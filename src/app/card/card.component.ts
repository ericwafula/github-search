import { Component, OnInit } from '@angular/core';
import { GithubService } from '../http-client/github.service';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  user:User;

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.getUser();
    this.user = this.githubService.user;
  }

}
