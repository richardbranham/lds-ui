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

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
    
  ngOnInit() {
    try {
      console.log("ngOnInit in user admin");
      let userData = this.ldsapi.getUser();
    } catch (error) {
      console.log("Error in ngOnInit in user admin");
    }
  } // ngOnInit
}
