import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './user-admin.component';
import { SmartadminLayoutModule } from "../shared/layout/layout.module";
import { SmartadminWidgetsModule } from "../shared/widgets/smartadmin-widgets.module";
import { StatsModule } from "../shared/stats/stats.module";
import { routing } from "./user-admin.routing";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { CarouselModule } from "ngx-bootstrap";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminDatatableModule,
    CarouselModule,
    NgxDatatableModule
  ],
  declarations: [
    UserAdminComponent
  ]
})
export class UserAdminModule { }
