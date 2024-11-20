import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCrtl: NavController) {}

  quartos = ''
  quantidade = ''

  confirmar() {
    this.navCrtl.navigateForward(`/confirmar`, { queryParams: { pQuartos: this.quartos, pQuantidade: this.quantidade} })
 
}
  
}
