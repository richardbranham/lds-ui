import { Component } from '@angular/core';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import {VgAPI} from 'videogular2/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { setTimeout } from 'core-js/library/web/timers';
import { LdsApiService } from './lds-api.service';
import { LdsapiService } from './ldsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  preload:string = 'auto';
  api:VgAPI;

  constructor(private ldsapi: LdsApiService){
    console.log("app constructor");

    localStorage.setItem('token', '');
    let token = localStorage.getItem('token');
    console.log("token from localStorage", token);
    if(!token || token === "") {
      console.log("token was not set in localStorage, getting from api");
      this.ldsapi.getToken();
    }
    
    window.onbeforeunload = function(e) {
      ldsapi.getContent();
      return false;
    };
  }

  ngOnInit(): void {
    this.ldsapi.getTestData();
  }

  // http://videogular.github.io/videogular2/docs/modules/core/services/vg-api/

  onPlayerReady(api:VgAPI) {
    this.api = api;

    console.log("onPlayerReady app.component", this);

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
