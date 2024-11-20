import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtorDetalhesPage } from './ator-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AtorDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtorDetalhesPageRoutingModule {}
