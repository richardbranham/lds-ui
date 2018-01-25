import { Component } from '@angular/core';

@Component({
  selector: 'view-content',
  //template: `<vg-player (onPlayerReady)="onPlayerReady($event)">
  template: `<vg-player>
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" width="800" height="600" controls>
        <source src="http://ldsapi.kotter.net/storage/UserStatusChanges.mp4" type="video/mp4">
    </video>
  </vg-player>`,
})
export class ViewContentComponent {
  constructor() {}
}

// https://akveo.github.io/ng2-admin/articles/013-create-new-page/
