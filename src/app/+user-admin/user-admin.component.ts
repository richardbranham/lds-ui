import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AgmMap, AgmMarker } from '@agm/core';
import { LdsApiService } from '../lds-api.service';

//@FadeInTop()
@Component({
  selector: 'user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['user-admin.component.scss'],
})
export class UserAdminComponent implements OnInit {

  constructor(private ldsapi: LdsApiService) { }

  userData:  any[];

  rows = [];

  columns = [
    { prop: 'name' },
    { prop: 'email' }
  ];

  ngOnInit() {
    try {
      console.log("ngOnInit in user admin");
      this.ldsapi.getUser().subscribe(
        results => this.rows = results,
        error => console.log("error in user-admin subscribe", error)
      );
      console.log("userData", this.userData);

      this.rows = this.userData;

    } catch (error) {
      console.log("Error in ngOnInit in user admin", error);
    }
  } // ngOnInit

  onCreateUser() {
    console.log("onCreateUser");
    this.ldsapi.createUser("Richard Branham", "branham.richard@gmail.com").subscribe(
      results => console.log("user-admin onCreateUser results = ", results),
      error => console.log("error in user-admin onCreateUser", error)
    );
  } // onCreateUser
}
