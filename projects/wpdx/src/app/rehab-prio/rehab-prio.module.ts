import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RehabPrioComponent } from './rehab-prio.component';
import { RehabPrioRoutingModule } from './rehab-prio-routing.module';
import { RehabPrioPreviewComponent } from './rehab-prio-preview/rehab-prio-preview.component';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { RegionFilterDialogComponent } from './region-filter-dialog/region-filter-dialog.component';
import { AttributeFilterDialogComponent } from './attribute-filter-dialog/attribute-filter-dialog.component';
import { SourcesDialogComponent } from './sources-dialog/sources-dialog.component';



@NgModule({
  declarations: [
    RehabPrioComponent,
    RehabPrioPreviewComponent,
    SettingsDialogComponent,
    RegionFilterDialogComponent,
    AttributeFilterDialogComponent,
    SourcesDialogComponent
  ],
  imports: [
    CommonModule,
    RehabPrioRoutingModule,
    CommonComponentsModule,
    FormsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class RehabPrioModule { }
