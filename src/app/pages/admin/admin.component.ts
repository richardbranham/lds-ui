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

interface UserModel {
  id:  number;
  name:  string;
  email:  string;
  created_at:  string;
  updated_at:  string;
}

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})

export class AdminComponent {
  constructor(private http: HttpClient) {}

  token: string = "";
  contentFileList: ContentModel[] = [];
  userList:  UserModel[] = [];

  ngOnInit() {
    try {
      this.token = localStorage.getItem('token');

      this.getUser();

      console.log("admin, token = ", this.token);
      const req = this.http.post<ContentModel[]>('https://ldsapi.kotter.net/api/auth/training/getcontent/true', 
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
    try {
      this.token = localStorage.getItem('token');
      console.log("pushToAll, token = ", this.token);
      const req = this.http.post<ContentModel[]>('https://ldsapi.kotter.net/api/auth/training/push', 
          { 'uuid': contentUuid },
          { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
        .subscribe(
          res => {
            console.log("pushToAll, res", res);
            //this.contentFileList = res;
          },
          err => {
            console.log('pushToAll error occured', err);
          }
          );
      } catch (error) {
        // This error is usually called when device does not support geolocation at all
        alert(error);
      } // catch
  } // pushToAll

  createUser(userFullName, email) {
    console.log(email);
    try {
      this.token = localStorage.getItem('token');
      console.log("createUser, token = ", this.token);
      const req = this.http.post<ContentModel[]>('https://ldsapi.kotter.net/api/auth/user/create', 
          { 'email': email, 'userFullName': userFullName },
          { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
        .subscribe(
          res => {
            console.log("createUser, res", res);
            //this.contentFileList = res;
          },
          err => {
            console.log('createUser error occured', err);
          }
          );
      } catch (error) {
        // This error is usually called when device does not support geolocation at all
        alert(error);
      } // catch
  } // createUser  

  getUser() {
    console.log("getUser");
    try {
      this.token = localStorage.getItem('token');
      console.log("getUser, token = ", this.token);
      const req = this.http.post<UserModel[]>('https://ldsapi.kotter.net/api/auth/user/get', 
          {},
          { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
        .subscribe(
          res => {
            console.log("getUser, res", res);
            this.userList = <UserModel[]>res;
            //this.contentFileList = res;
          },
          err => {
            console.log('getUser error occured', err);
          }
          );
      } catch (error) {
        // This error is usually called when device does not support geolocation at all
        alert(error);
      } // catch
  } // getUser 
}

// PW for ChangeMe1!:  $2y$10$B7jvjK6yPc0xr.LfT4Suz.QVSifdxfNktyvx6HRWu0E1uzHPQ3sFe
