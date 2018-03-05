import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AgmMap, AgmMarker } from '@agm/core';

//@FadeInTop()
@Component({
  selector: 'user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['user-admin.component.scss'],
})
export class UserAdminComponent implements OnInit {
  currentLocation: Coordinates = null;
  currentLocationString: string;
  
  lat: number = 33.8836184;
  lng: number = -84.0563705;

  coords: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    try {
      console.log("ngOnInit in missionary-locations");
      let token = localStorage.getItem('token');
      const req = this.http.get('https://ldsapi.kotter.net/api/auth/location', 
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
              console.log(element.latitude);
            });
          },
          err => {
            console.log('Error occured in user location', err);
          }
        );
    } catch (error) {
      // This error is usually called when device does not support geolocation at all
      alert(error);
    }
  } // ngOnInit
}
