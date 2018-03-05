
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {UserAdminComponent} from "./user-admin.component";

export const routes:Routes = [
  {
  path: '',
  component: UserAdminComponent,
/*
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products-view',
    component: ProductsViewComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  */
}
];

export const routing = RouterModule.forChild(routes)
