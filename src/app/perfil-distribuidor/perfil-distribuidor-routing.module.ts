import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDistribuidorPage } from './perfil-distribuidor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDistribuidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDistribuidorPageRoutingModule {}
