import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaIIePage } from './deta-iie.page';

const routes: Routes = [
  {
    path: '',
    component: DetaIIePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaIIePageRoutingModule {}
