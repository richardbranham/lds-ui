import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RealtimeGeolocationService } from 'nemex-angular2-realtimegeolocation';
import { AgmMap } from '@agm/core/directives/map';

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

    coords: any[] = [];

    constructor(private locationService: RealtimeGeolocationService, private http: HttpClient) { 
      }

    ngOnInit() {
      try {
        let token = localStorage.getItem('token');
        const req = this.http.get('http://ldsapi.kotter.net/api/auth/location', 
          { responseType: 'text', 
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') })
          .subscribe(
            res => {
              let v = JSON.parse(res);
              let i = 1;
              v.forEach(element => {
                element.latitude = parseFloat(element.latitude);
                element.longitude = parseFloat(element.longitude);
                element.index = i.toString();
                this.coords.push(element);
                i++;
              });
            },
            err => {
              console.log('Error occured in user location', err);
            }
          );
    
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
