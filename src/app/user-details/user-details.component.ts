import {Component, OnDestroy, OnInit} from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit, OnDestroy{
  userDetails: any = {};
  intervalId: any;
  constructor() {
  }
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const selectedUser = localStorage.getItem('selectedUser');
      if (!isUndefined(selectedUser) && selectedUser !== '') {
        clearInterval(this.intervalId);
        this.userDetails = JSON.parse(localStorage.getItem('selectedUser'));
        console.log(this.userDetails);
      }
    }, 100);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
