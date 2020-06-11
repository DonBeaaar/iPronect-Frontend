import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Perf1lPage } from './perf1l.page';

const routes: Routes = [
  {
    path: '',
    component: Perf1lPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Perf1lPageRoutingModule {}
