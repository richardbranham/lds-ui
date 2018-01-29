import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'upload',
  template: `<input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." />
  <br /><button type="button" (click)="upload()">Upload</button>`,
})
export class UploadComponent {


  filesToUpload: Array<File>;
  
      constructor() {
          this.filesToUpload = [];
      }
  
      upload() {
          this.makeFileRequest("https://ldsapi.kotter.net/api/uploadfile", [], this.filesToUpload).then((result) => {
              console.log(result);
          }, (error) => {
              console.error(error);
          });
      }
  
      fileChangeEvent(fileInput: any){
          this.filesToUpload = <Array<File>> fileInput.target.files;
      }
  
      makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
          return new Promise((resolve, reject) => {
              var formData: any = new FormData();
              var xhr = new XMLHttpRequest();
              for(var i = 0; i < files.length; i++) {
                  formData.append("uploads[]", files[i], files[i].name);
              }
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      if (xhr.status == 200) {
                          resolve(JSON.parse(xhr.response));
                      } else {
                          reject(xhr.response);
                      }
                  }
              }
              xhr.open("POST", url, true);
              xhr.send(formData);
          });
      }
}

