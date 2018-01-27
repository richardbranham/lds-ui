import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VgAPI, VgMedia } from 'videogular2/core';

@Component({
  selector: 'view-content',
  template: `<li *ngFor="let m of contentFileList">
  <a href='http://ldsapi.kotter.net{{m}}'>{{m}}</a><br />
  </li>

  <vg-player (onPlayerReady)="onPlayerReady($event)">
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" width="400" height="300" controls>
        <source [src]="contentUrl" type="video/mp4">
    </video>
  </vg-player>`,
})

export class ViewContentComponent {
  constructor(private http: HttpClient) {
  }

  contentUrl: string = "";
  api:VgAPI;
  contentFileList: string[] = [];

  ngOnInit() {
    try {
      const req = this.http.post('http://ldsapi.kotter.net/api/training/getcontent', {"users_id":"2"}, { responseType: 'json' })
        .subscribe(
          res => {
            //let v = JSON.parse(res);
            console.log("getcontent res", res);
            //this.contentUrl = "http://ldsapi.kotter.net" + res;
            this.contentFileList = <string[]>res;
            console.log("contentUrl", this.contentUrl);
            (<VgMedia>this.api.getDefaultMedia()).loadMedia();
          },
          err => {
            console.log('Error occured', err);
          }
        );

        const trainingProgressRequest = this.http.post('http://ldsapi.kotter.net/api/training/getprogress', 
            {"userId":"1", "contentId":"23915430-016d-11e8-81bf-01b3b67b09bc"})
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
