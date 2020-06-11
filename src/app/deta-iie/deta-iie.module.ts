import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaIIePageRoutingModule } from './deta-iie-routing.module';

import { DetaIIePage } from './deta-iie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaIIePageRoutingModule
  ],
  declarations: [DetaIIePage]
})
export class DetaIIePageModule {}
