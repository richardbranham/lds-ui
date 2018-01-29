import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VgAPI, VgMedia } from 'videogular2/core';

interface ProgressModel {
  training_progress_uuid: string;
  training_contents_uuid: string;
  users_id: string;
  video_last_location: string;
  created_at:  string;
  updated_at:  string;
};

interface VideoSource {
  src:  string;
  seekTime:  string;
}

@Component({
  selector: 'view-content',
  template: `<li *ngFor="let m of contentFileList">
  <a [routerLink]="" (click)='selectVideo(m.file_name, m.pivot.video_last_location, m.pivot.training_progress_uuid)'>
    {{m.file_name}} -- {{ ((m.pivot.video_last_location / m.video_length) * 100)  | number:'1.0-0' }}% -- {{m.pivot.updated_at}}</a><br />
  </li>
  <br />

  <vg-player (onPlayerReady)="onPlayerReady($event)">
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" width="400" height="300" controls>
        <source *ngFor="let video of sources" [src]="video.src" type="video/mp4">
    </video>
  </vg-player>
  `,
})

/*
*/

export class ViewContentComponent {
  constructor(private http: HttpClient) {
  }

  currentUrl: string = "";
  api:VgAPI;
  contentFileList: any[] = [];
  token: string = "";
  sources:  Object[] = [];

  selectVideo(videoPath, seekTime, training_progress_uuid) {
    console.log("selectVideo", videoPath, training_progress_uuid);
    this.currentUrl = "http://ldsapi.kotter.net/storage/" + videoPath;
    //seekTime = this.getProgress(training_progress_uuid);
    this.contentFileList.forEach(element => {
      if(element.training_progress_uuid == training_progress_uuid) {
        seekTime = element.video_last_location;
      }
    });
    this.sources = [{ "src": this.currentUrl, "seekTime":seekTime, "training_progress_uuid":training_progress_uuid }];
    //console.log("currentUrl", this.currentUrl);
    console.log("sources", this.sources);
    console.log("setting currentTime", seekTime);
    (<VgMedia>this.api.getDefaultMedia()).currentTime = seekTime;
    console.log("medias", this.api.medias);
  }

  setCurrentTime() {
    this.api.currentTime = 33;
  }

  seek(seekTime) {
    this.api.getDefaultMedia().currentTime = seekTime;
  }

  getProgress(training_progress_uuid) {
    console.log("getProgress");
    let requestData = {};
    if(training_progress_uuid != null) {
      requestData = { 'training_progress_uuid':training_progress_uuid };
    }

    const trainingProgressRequest = this.http.post('http://ldsapi.kotter.net/api/auth/training/getprogress/true', 
      requestData, 
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
    .subscribe(
    res => {
      //let v = JSON.parse(res);
      console.log("getProgress res", res);
      this.contentFileList = <any[]>res;
    },
    err => {
      console.log('Error occured in getprogress', err);
    }
  );


}

  ngOnInit() {
    try {
      this.token = localStorage.getItem('token');
      this.getProgress(null);

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
          // Save video location to db
          try {
            const trainingProgressRequest = this.http.post('http://ldsapi.kotter.net/api/auth/training/updateprogress', 
                { "training_progress_uuid" : (<ProgressModel>this.sources[0]).training_progress_uuid, 
                  "video_last_location" : this.api.currentTime
                },
                { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
              .subscribe(
              res => {
                //let v = JSON.parse(res);
                console.log("Saved video location to DB.", res);
                //this.contentFileList = <any[]>res;
                this.getProgress((<ProgressModel>this.sources[0]).training_progress_uuid);
              },
              err => {
                console.log('Error occured in getprogress', err);
              }
            );
          } catch(error) {

          }
      }
    );
    
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
          console.log("Video ended.");
      }
    );

    this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe(
      (wut) => {
          console.log("timeUpdate event", this.api.currentTime, wut, this.api.state);
          if(this.api.currentTime !== (<VideoSource>this.sources[0]).seekTime
              && this.api.state != "playing") {
            this.api.currentTime = (<VideoSource>this.sources[0]).seekTime;
          }
      }
    );

  } // onPlayerReady
}

// https://akveo.github.io/ng2-admin/articles/013-create-new-page/
