import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UploadComponent } from './upload.component';
import { routing } from './upload.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UploadComponent
  ]
})
export class UploadModule {}