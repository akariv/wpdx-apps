import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'status-predictions', loadChildren: () => import('./data-robot/data-robot.module').then(m => m.DataRobotModule) },
  { path: '', loadChildren: () => import('./rehab-prio/rehab-prio.module').then(m => m.RehabPrioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
