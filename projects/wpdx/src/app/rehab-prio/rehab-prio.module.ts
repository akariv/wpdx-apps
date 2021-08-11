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
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RehabPrioComponent } from './rehab-prio.component';
import { RehabPrioRoutingModule } from './rehab-prio-routing.module';



@NgModule({
  declarations: [RehabPrioComponent],
  imports: [
    CommonModule,
    RehabPrioRoutingModule,
    CommonComponentsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSidenavModule,
  ],
})
export class RehabPrioModule { }