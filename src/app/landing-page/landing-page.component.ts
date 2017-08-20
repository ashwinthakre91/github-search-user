import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  carryImagePath: string;
  constructor() {
    this.carryImagePath = 'assets/images/arrow.png';
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
}
