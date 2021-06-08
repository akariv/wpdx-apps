import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RehabPrioComponent } from './rehab-prio.component';



@NgModule({
  declarations: [RehabPrioComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class RehabPrioModule { }
