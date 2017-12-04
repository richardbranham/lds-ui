import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    /*
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
    */

    const req = this.http.post('https://staging.onescreen.kotter.net/newlogin', {
      username: 'richard@kotter.net',
      password: 'Kucharkj1*'
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    
    console.log("req = ", req);
  }

  // {username: "richard@kotter.net", password: ""}
}
