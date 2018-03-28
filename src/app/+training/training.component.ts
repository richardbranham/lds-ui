import { Component, OnInit } from '@angular/core';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { LdsApiService } from '../lds-api.service';
//import { TourService } from 'ngx-tour-console';

//@FadeInTop()
@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['training.component.scss'],
})

export class TrainingComponent implements OnInit {

  trainingData: any[] = [];

  users: any[] = [];

  trainingRows = [];

  trainingCols = [
    { prop: 'file_name' },
    { prop: 'name' },
    { prop: 'updated_at' }
  ];

  temp = [];

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

    try {
      console.log("getAssignments in training");
      this.ldsapi.getAssignments(1).subscribe(
        results => { this.trainingRows = results; console.log("trainingRows", this.trainingRows); },
        error => console.log("error in training getAssignments", error)
      );
    } catch (error) {
      console.log("Error in ngOnInit 2 in training", error);
    }
  } // ngOnInit

  checked(whom) {
    alert("checked" + whom);
  } // checked

  assignTraining() {
    //alert("assignTraining");
    this.trainingData.forEach(element => {
      console.log("element.training_contents_uuid", element.training_contents_uuid);
      this.ldsapi.pushToAll(element.training_contents_uuid);
    });
  } // assignTraining

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.trainingRows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }
}
