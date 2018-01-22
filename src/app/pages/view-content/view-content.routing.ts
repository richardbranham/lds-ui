import { Routes, RouterModule } from '@angular/router';

import { ViewContentComponent } from './view-content.component';

const routes: Routes = [
  {
    path: '',
    component: ViewContentComponent
  }
];

export const routing = RouterModule.forChild(routes);