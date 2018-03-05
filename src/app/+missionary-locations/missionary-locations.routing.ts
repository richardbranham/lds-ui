
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {MissionaryLocationsComponent} from "./missionary-locations.component";

export const routes:Routes = [
  {
  path: '',
  component: MissionaryLocationsComponent,
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
