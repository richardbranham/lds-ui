import { Component, OnInit } from '@angular/core';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

//@FadeInTop()
@Component({
  selector: 'messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['messaging.component.scss'],
})
export class MessagingComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    try {
      console.log("ngOnInit in messaging");
      let token = localStorage.getItem('token');
    } catch (error) {
      console.log(error);
    }
  } // ngOnInit
}
