import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { SmartadminLayoutModule } from "../shared/layout/layout.module";
import { SmartadminWidgetsModule } from "../shared/widgets/smartadmin-widgets.module";
import { StatsModule } from "../shared/stats/stats.module";
import { routing } from "./training.routing";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { CarouselModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminDatatableModule,
    CarouselModule
  ],
  declarations: [
    TrainingComponent
  ]
})
export class TrainingModule { }
