import { Component, Query } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  quantidade = ''
  servicos1 = ''
  servicos2 = ''
  servicos3= ''
  lmpz = 50
  pets = 150
  otrs = 250

  calcl = 0
  calcp = 0
  calco = 0



  res= ''
  res2 = ''
  alertButtons = ['okay']
  calcular(){

    if(this.servicos1 == 'lmpz'){
      this.res = (this.lmpz * parseFloat(this.quantidade)).toFixed(2)
    }else if (this.servicos1 == 'pets'){
      this.res = (this.pets * parseFloat(this.quantidade)).toFixed(2)
    }else if(this.servicos1 == 'otrs'){
      this.res = (this.otrs* parseFloat(this.quantidade)).toFixed(2)
    }
    if(this.servicos2 == '1'){
      this.calcl = this.lmpz * parseFloat(this.quantidade)
      this.calcp= this.pets * parseFloat(this.quantidade)
      this.res = (this.calcl + this.calcp).toFixed(2)
    }else if (this.servicos2 == '2'){
      this.calcl = this.lmpz * parseFloat(this.quantidade)
      this.calco = this.otrs * parseFloat(this.quantidade)
      this.res = (this.calcl + this.calco).toFixed(2)
    }else if (this.servicos2 == '3'){
      this.calcp = this.pets * parseFloat(this.quantidade)
      this.calco = this.otrs *parseFloat(this.quantidade)
      this.res = (this.calcp + this.calco).toFixed(2)
    }
    if(this.servicos3){
      this.calcl = this.lmpz * parseFloat(this.quantidade)
      this.calcp = this.pets * parseFloat(this.quantidade)
      this.calco = this.otrs * parseFloat(this.quantidade)

      this.res = (this.calcl + this.calcp + this.calco).toFixed(2)
    }
    this.res2 = 'O valor a ser pago sera: ' + this.res + ' por limpeza ser: ' + this.calcl.toFixed(2) + ' por pets: ' + this.calcp.toFixed(2) + ' e por outros: ' + this.calco.toFixed(2)
  }
  }
