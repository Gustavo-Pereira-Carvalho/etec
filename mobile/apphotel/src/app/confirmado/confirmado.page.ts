import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmado',
  templateUrl: './confirmado.page.html',
  styleUrls: ['./confirmado.page.scss'],
})
export class ConfirmadoPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  resultado = ''
  ngOnInit() {
    this.resultado = this.route.snapshot.queryParamMap.get('pQuartos')!
  }

}
