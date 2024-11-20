import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarioPage } from './mario.page';

const routes: Routes = [
  {
    path: '',
    component: MarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarioPageRoutingModule {}
