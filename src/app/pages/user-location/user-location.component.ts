import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealtimeGeolocationService } from 'nemex-angular2-realtimegeolocation';

@Component({
    // moduleId: module.id,
    selector: 'app-user-location',
    templateUrl: 'user-location.component.html',
    styleUrls: ['user-location.component.scss']
})

export class UserLocationComponent implements OnInit {
    currentLocation: Coordinates = null;
    currentLocationString: string;
    
    lat: number = 33.8836184;
    lng: number = -84.0563705;

    coords = [
      {"lat":33.9184669000, "lng":-84.0148312000},
      {"lat":33.8299653000, "lng":-84.0847569000}
    ];

    constructor(private locationService: RealtimeGeolocationService, private http: HttpClient) { }

    ngOnInit() {
      try {
        const req = this.http.get('http://ldsapi.kotter.net/api/location')
          .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log('Error occured');
            }
          );
    
        console.log('req = ', req);    

        /*
          // Start obtaining realtime location when map component loads
          this.locationService.refreshInterval = 10000;
          this.locationService.start();

          // Update the location on the map according to the current position of the user
          this.locationService.getLocationObservable().subscribe(
            position => {
              this.currentLocation = position.coords;
              // console.log('Location', Date, this.currentLocation);
              this.currentLocationString += this.currentLocation.latitude + ' ' + this.currentLocation.longitude + '<br />';
            },
            error => {
              // Usually called because of permission issues or an error obtaining the last position
              alert(error.message);
          });
        */
      } catch (error) {
        // This error is usually called when device does not support geolocation at all
        alert(error);
      }
    }
  }
