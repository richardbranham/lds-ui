import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SendMessageComponent } from './send-message.component';
import { routing } from './send-message.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    SendMessageComponent
  ]
})
export class SendMessageModule {}