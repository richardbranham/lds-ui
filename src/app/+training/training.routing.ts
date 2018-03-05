
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { TrainingComponent } from "./training.component";

export const routes:Routes = [
  {
    path: '',
    component: TrainingComponent
  }
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
];

export const routing = RouterModule.forChild(routes)
