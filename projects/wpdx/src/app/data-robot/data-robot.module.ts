import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRobotRoutingModule } from './data-robot-routing.module';
import { DataRobotComponent } from './data-robot.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonComponentsModule } from '../common-components/common.module';


@NgModule({
  declarations: [
    DataRobotComponent
  ],
  imports: [
    CommonModule,
    DataRobotRoutingModule,
    CommonComponentsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
  ]
})
export class DataRobotModule { }
