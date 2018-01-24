import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { RealtimeGeolocationService } from 'nemex-angular2-realtimegeolocation';
import { UserLocationComponent } from './pages/user-location/user-location.component';
import { UploadComponent } from './pages/upload/upload.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { ViewContentComponent } from './pages/view-content/view-content.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent,
    children: [
      { path: 'upload',  loadChildren: './pages/upload/upload.module' },
    ]
  },
  {
    path: 'sendmessage',
    component: SendMessageComponent,
    children: [
      { path: 'sendmessage',  loadChildren: './pages/send-message/send-message.module' },
    ]
  },
  {
    path: 'training',
    component: ViewContentComponent,
    children: [
      { path: 'training',  loadChildren: './pages/view-content/view-content.module' },
    ]
  },
  {
    path: 'locations',
    component: UserLocationComponent,
    children: [
      { path: 'locations',  loadChildren: './pages/user-location/user-location.module' },
    ]
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserLocationComponent,
    UploadComponent,
    SendMessageComponent,
    ViewContentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule, 
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [RealtimeGeolocationService],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
