import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MapLayerComponent } from './map-layer/map-layer.component';
import { AdmSelectorComponent } from './adm-selector/adm-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { AboutPanelComponent } from './about-panel/about-panel.component';
import { LogosBarComponent } from './logos-bar/logos-bar.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent,
    SidePanelComponent,
    AboutPanelComponent,
    LogosBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent,
    SidePanelComponent,
    AboutPanelComponent
  ]
})
export class CommonComponentsModule { }
