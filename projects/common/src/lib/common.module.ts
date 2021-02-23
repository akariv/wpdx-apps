import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MapLayerComponent } from './map-layer/map-layer.component';



@NgModule({
  declarations: [AppLayoutComponent, MapLayerComponent],
  imports: [
  ],
  exports: [AppLayoutComponent, MapLayerComponent]
})
export class CommonModule { }
