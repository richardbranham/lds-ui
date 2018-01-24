import { Component } from '@angular/core';

@Component({
  selector: 'view-content',
  template: `<vg-player (onPlayerReady)="onPlayerReady($event)">
    <video [vgMedia]="media" #media id="singleVideo" preload="auto"  width="320" height="240" controls>
        <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">
    </video>
  </vg-player> `,
})
export class ViewContentComponent {
  constructor() {}
}


// https://akveo.github.io/ng2-admin/articles/013-create-new-page/