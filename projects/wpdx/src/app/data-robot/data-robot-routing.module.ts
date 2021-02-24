import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataRobotComponent } from './data-robot.component';

const routes: Routes = [{ path: '', component: DataRobotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRobotRoutingModule { }
