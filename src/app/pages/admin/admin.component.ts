import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';

interface ContentModel {
  training_contents_uuid: string;
  file_path: string;
  file_name: string;
  file_type: string;
  video_length: string;
  created_at:  string;
  updated_at:  string;
};

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})

export class AdminComponent {
  constructor(private http: HttpClient) {}

  token: string = "";
  contentFileList: ContentModel[] = [];  

  ngOnInit() {
    try {
      this.token = localStorage.getItem('token');
      console.log("admin, token = ", this.token);
      const req = this.http.post<ContentModel[]>('http://ldsapi.kotter.net/api/auth/training/getcontent/true', 
          {},
          { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
        .subscribe(
          res => {
            console.log("getcontent res 1", res);
            this.contentFileList = res;
          },
          err => {
            console.log('Getcontent error occured', err);
          }
        );
      } catch (error) {
      // This error is usually called when device does not support geolocation at all
      alert(error);
    } // catch
  } // ngOnInit

  pushToAll(contentUuid) {
    console.log(contentUuid);
  }
}

// PW for ChangeMe1!:  $2y$10$B7jvjK6yPc0xr.LfT4Suz.QVSifdxfNktyvx6HRWu0E1uzHPQ3sFe
