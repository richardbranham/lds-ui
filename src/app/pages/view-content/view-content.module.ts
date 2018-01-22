import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewContentComponent } from './view-content.component';
import { routing } from './view-content.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    ViewContentComponent
  ]
})
export class ViewContentModule {}