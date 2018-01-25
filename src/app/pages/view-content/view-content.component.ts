import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'view-content',
  //template: `<vg-player (onPlayerReady)="onPlayerReady($event)">
  template: `<vg-player>
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" width="800" height="600" controls>
        <source [src]="contentUrl" type="video/mp4">
    </video>
  </vg-player>`,
})

export class ViewContentComponent {
  constructor(private http: HttpClient) {

  }

  contentUrl: string = "";

  ngOnInit() {
    try {
      const req = this.http.get('http://ldsapi.kotter.net/api/training/getcontent', {responseType: 'text'})
        .subscribe(
          res => {
            //let v = JSON.parse(res);
            console.log("res", res);
            this.contentUrl = "http://ldsapi.kotter.net" + res;
            console.log("contentUrl", this.contentUrl);
          },
          err => {
            console.log('Error occured');
          }
        );
    } catch (error) {
      // This error is usually called when device does not support geolocation at all
      alert(error);
    }
  }  
}

// https://akveo.github.io/ng2-admin/articles/013-create-new-page/
