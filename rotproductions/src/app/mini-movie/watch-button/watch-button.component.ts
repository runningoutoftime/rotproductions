import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';

@Component({
  selector: 'watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.scss']
})
export class WatchButtonComponent implements OnInit {
  // member variables
  countdown: number = 5;
  interval: any;

  constructor() {
    this.interval = setInterval(()=> { 
      this.countdown = this.countdown - 1;
      if (this.countdown == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnInit() {

  }

  // member functions
  helloWorld(countdown: number) {
    if (countdown > 2) {
      return "Click the button"
    }
    else if (countdown == 2) {
      return "Time is running out!"
    } else if(countdown > 0) {
      return "HURRY"
    } else if (countdown == 0){
      return "Too late... :("
    } else {
      return "Yay!";
    }
  }

  buttonClick() {
    if (this.countdown > 0) {
      clearInterval(this.interval);
      this.countdown = -1;
    }
  }
}
