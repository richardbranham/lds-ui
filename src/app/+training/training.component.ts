import { Component, OnInit } from '@angular/core';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { LdsApiService } from '../lds-api.service';
import {FormControl} from '@angular/forms';

//@FadeInTop()
@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['training.component.scss'],
})

export class TrainingComponent implements OnInit {

  trainingData: any[] = [];

  stateCtrl: FormControl;

  constructor(private ldsapi: LdsApiService) {
    this.stateCtrl = new FormControl();
  }

  ngOnInit() {
    try {
      console.log("ngOnInit in training");
      this.ldsapi.getContent().subscribe(
        results => this.trainingData = results,
        error => console.log("error in training subscribe", error)
      );
    } catch (error) {
      alert(error);
    }
  } // ngOnInit
}
