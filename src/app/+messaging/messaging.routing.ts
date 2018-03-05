
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { MessagingComponent } from "./messaging.component";

export const routes:Routes = [
  {
    path: '',
    component: MessagingComponent
  }
  /*
  ,{
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
  }
  */
];

export const routing = RouterModule.forChild(routes)
