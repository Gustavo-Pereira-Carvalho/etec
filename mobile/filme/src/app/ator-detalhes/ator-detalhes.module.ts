import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtorDetalhesPageRoutingModule } from './ator-detalhes-routing.module';

import { AtorDetalhesPage } from './ator-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtorDetalhesPageRoutingModule
  ],
  declarations: [AtorDetalhesPage]
})
export class AtorDetalhesPageModule {}
