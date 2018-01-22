import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { RealtimeGeolocationService } from 'nemex-angular2-realtimegeolocation';

import { UserLocationComponent } from './user-location/user-location.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLocationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule, 
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [RealtimeGeolocationService],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
