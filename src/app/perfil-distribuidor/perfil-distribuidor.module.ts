import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDistribuidorPageRoutingModule } from './perfil-distribuidor-routing.module';

import { PerfilDistribuidorPage } from './perfil-distribuidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDistribuidorPageRoutingModule
  ],
  declarations: [PerfilDistribuidorPage]
})
export class PerfilDistribuidorPageModule {}
