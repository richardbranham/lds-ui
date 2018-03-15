import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { SmartadminLayoutModule } from "../shared/layout/layout.module";
import { SmartadminWidgetsModule } from "../shared/widgets/smartadmin-widgets.module";
import { StatsModule } from "../shared/stats/stats.module";
import { routing } from "./training.routing";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { CarouselModule } from "ngx-bootstrap";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminLayoutModule,
    SmartadminWidgetsModule,
    StatsModule,
    SmartadminDatatableModule,
    CarouselModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [
    TrainingComponent
  ]
})
export class TrainingModule { }
