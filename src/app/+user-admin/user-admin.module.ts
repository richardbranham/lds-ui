import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './user-admin.component';
import { SmartadminLayoutModule } from "../shared/layout/layout.module";
import { SmartadminWidgetsModule } from "../shared/widgets/smartadmin-widgets.module";
import { StatsModule } from "../shared/stats/stats.module";
import { routing } from "./user-admin.routing";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { CarouselModule } from "ngx-bootstrap";
import { AgmCoreModule } from '@agm/core'; // AIzaSyDVe5bioxyQhH_JoTZCiekFmdXprckYw2U

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminDatatableModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVe5bioxyQhH_JoTZCiekFmdXprckYw2U'
    })
  ],
  declarations: [
    UserAdminComponent
  ]
})
export class UserAdminModule { }
