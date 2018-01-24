import { Routes, RouterModule } from '@angular/router';

import { ViewContentComponent } from './view-content.component';

const routes: Routes = [
  {
    path: 'training',
    component: ViewContentComponent
  }
];

export const routing = RouterModule.forChild(routes);