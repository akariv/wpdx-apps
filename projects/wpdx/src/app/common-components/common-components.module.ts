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
import { AirtableLayoutComponent } from './airtable-layout/airtable-layout.component';
import { AirtableService } from '../airtable.service';
import { LegendControlComponent } from './controls/legend-control/legend-control.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomSelectorComponent } from './controls/custom-selector/custom-selector.component';
import { FiltersControlComponent } from './controls/filters-control/filters-control.component';
import { ControlsComponent } from './controls/controls/controls.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent,
    SidePanelComponent,
    AboutPanelComponent,
    LogosBarComponent,
    AirtableLayoutComponent,
    LegendControlComponent,
    CustomSelectorComponent,
    FiltersControlComponent,
    ControlsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ],
  exports: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent,
    SidePanelComponent,
    AboutPanelComponent,
    AirtableLayoutComponent,
    LegendControlComponent,
    CustomSelectorComponent,
    FiltersControlComponent,
    ControlsComponent
  ]
})
export class CommonComponentsModule { }
