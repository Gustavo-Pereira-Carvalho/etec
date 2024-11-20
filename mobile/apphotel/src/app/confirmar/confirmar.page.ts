import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
})
export class ConfirmarPage implements OnInit {
  
  quartos = ''
  quantidade = ''
  total = 0
  standart = 806
  superior = 1050
  master = 1500
  luxo = 2100
  vldiaria = 0
  constructor(private route: ActivatedRoute, private navCrtl: NavController) { }
  
  ngOnInit() {
    this.quartos = this.route.snapshot.queryParamMap.get('pQuartos')!
    this.quantidade = this.route.snapshot.queryParamMap.get('pQuantidade')!

    if (this.quartos == 'standart') {
      this.total = parseFloat(this.quantidade) * this.standart
      this.vldiaria = this.standart
    } else if (this.quartos == 'superior') {
      this.total = parseFloat(this.quantidade) * this.superior
      this.vldiaria = this.superior
    } else if (this.quartos == 'master') {
      this.total = parseFloat(this.quantidade) * this.master
      this.vldiaria = this.master
    } else if (this.quartos == 'luxo') {
      this.total = parseFloat(this.quantidade) * this.luxo
      this.vldiaria = this.luxo
    }
  }
  confirmar() {
    this.navCrtl.navigateForward(`/confirmado`, { queryParams: { pQuartos: this.quartos} })

  }

}
