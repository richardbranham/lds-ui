import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import {VgAPI} from 'videogular2/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { setTimeout } from 'core-js/library/web/timers';

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
    window.onbeforeunload = function(e) {
      const req = http.get('http://ldsapi.kotter.net/api/training/getcontent', {responseType: 'text'})
        .subscribe(
          res => {
            //let v = JSON.parse(res);
            console.log("res", res);
            setTimeout(alert("hello"), 3000);
          },
          err => {
            console.log('Error occured');
          }
        );

      return false;
    };
  }

  ngOnInit(): void {
  }

  // http://videogular.github.io/videogular2/docs/modules/core/services/vg-api/

  onPlayerReady(api:VgAPI) {
    this.api = api;

    console.log("onPlayerReady", this);

    //api.currentTime = 17.5;

    //setInterval(function(){ console.log("Hello", api.currentTime); }, 3000);
    
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            // this.api.getDefaultMedia().currentTime = 0;
        }
    );
  }
}
