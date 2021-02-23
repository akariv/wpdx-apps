import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';



@NgModule({
  declarations: [CommonComponent, AppLayoutComponent],
  imports: [
  ],
  exports: [CommonComponent]
})
export class CommonModule { }
