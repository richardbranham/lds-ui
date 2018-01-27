import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VgAPI, VgMedia } from 'videogular2/core';
// http://ldsapi.kotter.net{{m}}
@Component({
  selector: 'view-content',
  template: `<li *ngFor="let m of contentFileList">
  <a [routerLink]="" (click)='selectVideo(m.file_path)'>{{m.file_name}}</a><br />
  </li>

  <vg-player (onPlayerReady)="onPlayerReady($event)">
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" width="400" height="300" controls>
        <source [src]="currentUrl" type="video/mp4">
    </video>
  </vg-player>`,
})

export class ViewContentComponent {
  constructor(private http: HttpClient) {
  }

  currentUrl: string = "";
  api:VgAPI;
  contentFileList: any[] = [];
  token: string = "";

  selectVideo(arg) {
    console.log("selectVideo", arg);
    this.currentUrl = "http://ldsapi.kotter.net" + arg;
    console.log("currentUrl", this.currentUrl);
    (<VgMedia>this.api.getDefaultMedia()).loadMedia();
  }

  //          {"users_id":"2"}, 

  ngOnInit() {
    try {
      this.token = localStorage.getItem('token');
      const req = this.http.post('http://ldsapi.kotter.net/api/auth/training/getcontent', 
          {},
          { responseType: 'json', 
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
        .subscribe(
          res => {
            console.log("getcontent res", res);
            this.contentFileList = <any[]>res;
          },
          err => {
            console.log('Error occured', err);
          }
        );

        const trainingProgressRequest = this.http.post('http://ldsapi.kotter.net/api/auth/training/getprogress', 
            {"userId":"1", "contentId":"23915430-016d-11e8-81bf-01b3b67b09bc"}, 
            { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
          .subscribe(
          res => {
            //let v = JSON.parse(res);
            console.log("res", res);
          },
          err => {
            console.log('Error occured in getprogress', err);
          }
        );
      } catch (error) {
      // This error is usually called when device does not support geolocation at all
      alert(error);
    } // catch
  } // ngOnInit


  onPlayerReady(api:VgAPI) {
    this.api = api;
    console.log("onPlayerReady view-content");

    this.api.getDefaultMedia().subscriptions.pause.subscribe(
      () => {
          console.log("Video paused");
      }
    );
    
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
          console.log("Video ended.");
      }
    );
  } // onPlayerReady
}

// https://akveo.github.io/ng2-admin/articles/013-create-new-page/
