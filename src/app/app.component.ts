import { Component, ViewContainerRef } from '@angular/core';
import { LdsApiService } from './lds-api.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'app works!';

  public constructor(private ldsapi: LdsApiService, private viewContainerRef: ViewContainerRef) {}

}
