import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RehabPrioComponent } from './rehab-prio.component';

const routes: Routes = [{ path: '', component: RehabPrioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RehabPrioRoutingModule { }
