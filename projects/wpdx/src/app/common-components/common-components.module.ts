import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MapLayerComponent } from './map-layer/map-layer.component';
import { AdmSelectorComponent } from './adm-selector/adm-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent
  ]
})
export class CommonComponentsModule { }
