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
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent,
    children: [
      //{ path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'upload',  loadChildren: './upload/upload.module#NewModule' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserLocationComponent,
    UploadComponent
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
