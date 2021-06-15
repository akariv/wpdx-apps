import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRobotRoutingModule } from './data-robot-routing.module';
import { DataRobotComponent } from './data-robot.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    DataRobotComponent
  ],
  imports: [
    CommonModule,
    DataRobotRoutingModule,
    CommonComponentsModule,
    FormsModule,
    MatIconModule,
  ]
})
export class DataRobotModule { }
