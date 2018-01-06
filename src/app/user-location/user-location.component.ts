import { Component, OnInit, Input } from '@angular/core';
import { RealtimeGeolocationService } from 'nemex-angular2-realtimegeolocation';

@Component({
    // moduleId: module.id,
    selector: 'app-user-location',
    templateUrl: 'user-location.component.html',
    styleUrls: ['user-location.component.scss']
})

export class UserLocationComponent implements OnInit {
    currentLocation: Coordinates = null;

    constructor(private locationService: RealtimeGeolocationService) { }

    ngOnInit() {
      try {
          // Start obtaining realtime location when map component loads
          this.locationService.refreshInterval = 300;
          this.locationService.start();

          // Update the location on the map according to the current position of the user
          this.locationService.getLocationObservable().subscribe(
            position => {
              this.currentLocation = position.coords;
            },
            error => {
              // Usually called because of permission issues or an error obtaining the last position
              alert(error.message);
          });
      } catch (error) {
        // This error is usually called when device does not support geolocation at all
        alert(error);
      }
    }
  }
