import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  }
];

export const routing = RouterModule.forChild(routes);