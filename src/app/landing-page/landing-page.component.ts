import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  restaurantImagePath: string;
  constructor() {
    this.restaurantImagePath = 'assets/images/restaurant.jpg';
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
}
