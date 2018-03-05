import { Component, OnInit } from '@angular/core';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

//@FadeInTop()
@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['training.component.scss'],
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    try {
      console.log("ngOnInit in training");
    } catch (error) {
      alert(error);
    }
  } // ngOnInit
}
