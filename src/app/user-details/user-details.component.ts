import {Component, OnDestroy, OnInit} from '@angular/core';
import {isUndefined} from 'util';
import {UsersService} from "../shared/services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit, OnDestroy{
  userDetails: any = {};
  intervalId: any;
  organisationName: string;
  moreUserInfo: any = {};
  reposInfo: any = [];
  constructor(private usersService: UsersService) {
  }
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const selectedUser = localStorage.getItem('selectedUser');
      if (!isUndefined(selectedUser) && selectedUser !== '') {
        clearInterval(this.intervalId);
        this.userDetails = JSON.parse(localStorage.getItem('selectedUser'));
        console.log(this.userDetails);
        // get more user info
        this.usersService
          .getMoreUserInfo(this.userDetails.url)
          .then((response) => {
          this.moreUserInfo =  response;
          });
        // get repository information
        this.usersService
          .getReposInfo(this.userDetails.repos_url)
          .then((response) => {
          this.reposInfo = response;
          });
      }
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
