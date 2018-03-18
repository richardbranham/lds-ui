import { Component, OnInit } from '@angular/core';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { LdsApiService } from '../lds-api.service';

//@FadeInTop()
@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['training.component.scss'],
})

export class TrainingComponent implements OnInit {

  trainingData: any[] = [];

  users: any[] = [];

  constructor(private ldsapi: LdsApiService) {
  }

  ngOnInit() {
    try {
      console.log("ngOnInit in training");
      this.ldsapi.getContent().subscribe(
        results => this.trainingData = results,
        error => console.log("error in training subscribe", error)
      );

      // this.ldsapi.getUser().subscribe(
      //   results => { this.users = results; console.log("getUser", results); },
      //   error => console.log("error in getUser subscribe", error)
      // );

      this.ldsapi.getUser().subscribe(
        results => { this.users = results; console.log("getUser", results); },
        error => console.log("error in getUser subscribe", error)
      );
    } catch (error) {
      alert(error);
    }
  } // ngOnInit

  checked() {
    alert("checked");
  } // checked
}
