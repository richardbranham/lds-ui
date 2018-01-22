import { Routes, RouterModule } from '@angular/router';

import { SendMessageComponent } from './send-message.component';

const routes: Routes = [
  {
    path: '',
    component: SendMessageComponent
  }
];

export const routing = RouterModule.forChild(routes);