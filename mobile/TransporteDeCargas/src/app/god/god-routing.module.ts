import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodPage } from './god.page';

const routes: Routes = [
  {
    path: '',
    component: GodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodPageRoutingModule {}
