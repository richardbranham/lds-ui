import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLocationComponent } from './user-location/user-location.component';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  preload:string = 'auto';
  api:VgAPI;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    /*
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
    */

    const req = this.http.post('https://staging.onescreen.kotter.net/newlogin', {
      username: 'richard@kotter.net',
      password: 'Kucharkj1*'
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );

    console.log('req = ', req);
  }

  // {username: "richard@kotter.net", password: ""}
  
  // http://videogular.github.io/videogular2/docs/modules/core/services/vg-api/
  onPlayerReady(api:VgAPI) {
    this.api = api;

    console.log("onPlayerReady", this);

    api.currentTime = 17.5;

    setInterval(function(){ console.log("Hello", api.currentTime); }, 3000);
    
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            // this.api.getDefaultMedia().currentTime = 0;
        }
    );
  }
}
