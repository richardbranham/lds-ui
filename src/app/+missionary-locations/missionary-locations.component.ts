import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AgmMap, AgmMarker } from '@agm/core';
import { LdsApiService } from '../lds-api.service';

//@FadeInTop()
@Component({
  selector: 'missionary-locations',
  templateUrl: './missionary-locations.component.html',
  styleUrls: ['missionary-locations.component.scss'],
})
export class MissionaryLocationsComponent implements OnInit {
  currentLocation: Coordinates = null;
  currentLocationString: string;
  
  lat: number = 33.8836184;
  lng: number = -84.0563705;

  coords: any[] = [];

  constructor(private ldsapi: LdsApiService) { }

  ngOnInit() {
    try 
    {
      this.ldsapi.getLocationData().subscribe(
        results => this.coords = results,
        error => console.log("ERRORRRRRR")
      );
      console.log("coords", this.coords);
    }
    catch(error)
    {
      console.log("Error in locations component ngOnInit.");
    }
  } // ngOnInit
}
