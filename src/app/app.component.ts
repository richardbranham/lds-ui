import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import {VgAPI} from 'videogular2/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { setTimeout } from 'core-js/library/web/timers';

interface Login {
  access_token: string;
  token_type: string;
  expires_in: string;
};

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
    console.log("app constructor");

    localStorage.setItem('token', '');
    let token = localStorage.getItem('token');
    console.log("token from localStorage", token);
    if(!token || token === "") {
      console.log("token was not set in localStorage, getting from api");
      const req = http.post<Login>('http://ldsapi.kotter.net/api/auth/login', 
          {"email":"rich.ldsapi@branham.us", "password":"Kucharkj1*"},
          {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .subscribe(
        res => {
          console.log("login returned", res);
          console.log("access token:  ", res.access_token);
          localStorage.setItem('token', res.access_token);
        },
        err => {
          console.log('Login error occured');
        }
      );
    }
    
    window.onbeforeunload = function(e) {
      const req = http.post('http://ldsapi.kotter.net/api/training/getcontent', {"users_id":"1"})
        .subscribe(
          res => {
            //let v = JSON.parse(res);
            console.log("getcontent res", res);
            //setTimeout(alert("hello"), 3000);
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
