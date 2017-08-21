import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

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
    $('.parallax').parallax();

    const typed = new Typed('.type', {
      strings: ['neighbor', 'family', 'team', 'community'],
      stringsElement: null,
      // typing speed
      typeSpeed: 60,
      // time before typing starts
      startDelay: 600,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: Infinity,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: '|',
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html'
    });
  }
}
