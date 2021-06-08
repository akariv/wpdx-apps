import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'rehab-prio', loadChildren: () => import('./rehab-prio/rehab-prio.module').then(m => m.RehabPrioModule) },
  { path: 'status-predictions', loadChildren: () => import('./data-robot/data-robot.module').then(m => m.DataRobotModule) },
  { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
