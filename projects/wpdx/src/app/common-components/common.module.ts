import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MapLayerComponent } from './map-layer/map-layer.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    MapLayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppLayoutComponent,
    MapLayerComponent
  ]
})
export class CommonComponentsModule { }
