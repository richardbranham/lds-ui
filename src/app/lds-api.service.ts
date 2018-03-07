import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

interface Login {
  access_token: string;
  token_type: string;
  expires_in: string;
};

interface UserModel {
  id:  number;
  name:  string;
  email:  string;
  created_at:  string;
  updated_at:  string;
}

interface ContentModel {
  training_contents_uuid: string;
  file_path: string;
  file_name: string;
  file_type: string;
  video_length: string;
  created_at:  string;
  updated_at:  string;
};

@Injectable()
export class LdsApiService {

  constructor(private http: HttpClient) { }

  token: string;
  userList:  UserModel[] = [];

  getTestData(): string {
    return "Test";
  }

  getToken(): void {
    const req = this.http.post<Login>('https://ldsapi.kotter.net/api/auth/login', 
        {"email":"rich.ldsapi@branham.us", "password":"Kucharkj1*"},
        {headers: new HttpHeaders().set('Content-Type', 'application/json')})
    .subscribe(
      res => {
        console.log("getToken login returned", res);
        console.log("getToken access token:  ", res.access_token);
        localStorage.setItem('token', res.access_token);
      },
      err => {
        console.log('Login error occured');
      }
    );
  } // getToken

  getContent():  void {
    const req = this.http.post('https://ldsapi.kotter.net/api/training/getcontent', {"users_id":"1"})
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
  } // getContent


createUser(userFullName, email): Observable<any> {
  console.log(email);
  try {
    this.token = localStorage.getItem('token');
    console.log("createUser, token = ", this.token);
    return this.http.post<ContentModel[]>('https://ldsapi.kotter.net/api/auth/user/create', 
        { 'email': email, 'userFullName': userFullName },
        { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
      .map(
        res => {
          console.log("createUser, res", res);
          //this.contentFileList = res;
          return <ContentModel[]>res;
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

getUser(): Observable<any[]> {
  try {
    console.log("getUser from service");
    let coords = [];
    let token = this.getToken();
    return this.http.post<UserModel[]>('https://ldsapi.kotter.net/api/auth/user/get', 
      {},
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Content-Type', 'application/json') })
      .map(
        res => {
          console.log("getUser, res", res);
          this.userList = <UserModel[]>res;
          console.log("userList", this.userList);
          return this.userList;
        },
        err => {
          console.log('getUser error occured', err);
        }
    );
  } catch (error) {
    // This error is usually called when device does not support geolocation at all
    alert(error);
  }
} // getLocationData

  getLocationData(): Observable<any[]> {
    try {
      console.log("ngOnInit in missionary-locations");
      let coords = [];
      let token = this.getToken();
      return this.http.get('https://ldsapi.kotter.net/api/auth/location', 
        {
          responseType: 'text', 
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') })
        .map(
          res => {
            let v = JSON.parse(res);
            let i = 1;
            v.forEach(element => {
              element.latitude = parseFloat(element.latitude);
              element.longitude = parseFloat(element.longitude);
              element.index = i.toString();
              coords.push(element);
              i++;
              //console.log(element.latitude);
            });
            console.log("returning coords", coords);
            return <any[]>coords;
          },
          err => {
            console.log('Error occured in user location', err);
          }
        );
    } catch (error) {
      // This error is usually called when device does not support geolocation at all
      alert(error);
    }
  } // getLocationData
}
