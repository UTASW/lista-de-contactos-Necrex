import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimerComponent } from '../components/primer/primer.component';


@NgModule({
  declarations: [PrimerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports:[PrimerComponent]
})
export class ComponentsModule { }
