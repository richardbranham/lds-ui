import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

interface Login {
  access_token: string;
  token_type: string;
  expires_in: string;
};

@Injectable()
export class LdsApiService {

  constructor(private http: HttpClient) { }

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
  }
}
