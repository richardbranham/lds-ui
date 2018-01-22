const routes: Routes = [
    {
      path: 'pages',
      component: Pages,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'upload',  loadChildren: './upload/upload.module#NewModule' }
      ]
    }
  ];