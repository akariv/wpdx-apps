import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RehabPrioPreviewComponent } from './rehab-prio-preview/rehab-prio-preview.component';
import { RehabPrioComponent } from './rehab-prio.component';

const routes: Routes = [
  { path: 'preview', component: RehabPrioPreviewComponent },
  { path: '', component: RehabPrioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RehabPrioRoutingModule { }
