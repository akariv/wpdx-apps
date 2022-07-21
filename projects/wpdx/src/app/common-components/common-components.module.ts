import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MapLayerComponent } from './map-layer/map-layer.component';
import { AdmSelectorComponent } from './adm-selector/adm-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { AboutPanelComponent } from './about-panel/about-panel.component';
import { LogosBarComponent } from './logos-bar/logos-bar.component';
import { AirtableLayoutComponent } from './airtable-layout/airtable-layout.component';
import { AirtableService } from '../airtable.service';
import { LegendControlComponent } from './controls/legend-control/legend-control.component';
import { CustomSelectorComponent } from './controls/custom-selector/custom-selector.component';
import { FiltersControlComponent } from './controls/filters-control/filters-control.component';
import { ControlsComponent } from './controls/controls/controls.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AttributeFilterComponent } from './attribute-filter/attribute-filter.component';
import { BaseWaterpointPopupComponent } from './base-waterpoint-popup/base-waterpoint-popup.component';
import { BarComponent } from './bar/bar.component';
import { StalenessPopupBarComponent } from './staleness-popup-bar/staleness-popup-bar.component';
import { PieComponent } from './pie/pie.component';
import { SparkLineComponent } from './spark-line/spark-line.component';
import { AdmSearchBarComponent } from './adm-search-bar/adm-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export { StateService } from './state.service';


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
    AttributeFilterComponent,
    BaseWaterpointPopupComponent,
    BarComponent,
    StalenessPopupBarComponent,
    SparkLineComponent,
    PieComponent,
    AdmSearchBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AppLayoutComponent,
    MapLayerComponent,
    AdmSelectorComponent,
    AttributeFilterComponent,
    SidePanelComponent,
    AboutPanelComponent,
    AirtableLayoutComponent,
    LegendControlComponent,
    CustomSelectorComponent,
    FiltersControlComponent,
    ControlsComponent,
    BaseWaterpointPopupComponent,
    BarComponent,
    StalenessPopupBarComponent,
    SparkLineComponent,
    PieComponent,
    AdmSearchBarComponent
  ]
})
export class CommonComponentsModule { }
