import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  restaurantImagePath: string;
  analyticsImagePath: string;
  menuCardImagePath: string;
  orderImagePath: string;
  trackOrderImagePath: string;
  increaseRevImagePath: string;
  diningExpImagePath: string;
  constructor() {
    this.restaurantImagePath = 'assets/images/restaurant6.jpg';
    this.analyticsImagePath = 'assets/images/computer.png';
    this.menuCardImagePath = 'assets/images/menu-card.png';
    this.orderImagePath = 'assets/images/waiter.png';
    this.trackOrderImagePath = 'assets/images/tasks.png';
    this.increaseRevImagePath = 'assets/images/get-money.png';
    this.diningExpImagePath = 'assets/images/dish.png';
  }

  ngOnInit(): void {
    // initialize parallax
    $('.parallax').parallax();

    // initialize typed
    const typed = new Typed('.type', {
      strings: ['Automate table orders.', 'Enhance dining experience.'],
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


    // set navbar background color when scrolling.
    const navInitialClassimeoutId = setTimeout(() => {
      $('.navClass').css({
        'background-color': 'rgba(0,0,0,0.5)',
        'color': 'white'
      });
    }, 0);
    /*let scrollStart = 0;
    const topTypedText = $('#topTypedText');
    const topTypedTextOffset = topTypedText.offset();
    $(document).scroll(function() {
      scrollStart = $(this).scrollTop();
      if (scrollStart > topTypedTextOffset.top - 40) {
        $('.navClass').css({
          'background-color': 'black',
          'opacity': 0.7,
          'color': 'white'
          });
      } else {
        $('.navClass').css({
          'background-color': 'transparent',
          'opacity': 1,
          'color': 'white'
        });
      }
    });*/
  }
  // scroll to particular div
  scrollToDiv(id: string): void {
    $('html,body').animate({
        scrollTop: $(id).offset().top},
      'slow');
  }
}
