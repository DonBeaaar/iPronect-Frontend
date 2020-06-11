import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perf1lPageRoutingModule } from './perf1l-routing.module';

import { Perf1lPage } from './perf1l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perf1lPageRoutingModule
  ],
  declarations: [Perf1lPage]
})
export class Perf1lPageModule {}
