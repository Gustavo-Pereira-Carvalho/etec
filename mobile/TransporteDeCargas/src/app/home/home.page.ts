import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  quilometro = ''
  transporte = ''
  adicionais = ''
  pagamento = ''
  especial = ''
  res = ''
  res2 =''

  seguro = false
  ajudante = false
  embalagem = false
  agendamento = false

  leve = 1.50
  medio = 3.00
  pesado = 6.00
  totalTransporte = 0
  totalAdicionais = 0
  totalEspecial = 0
  hrT = ''

  total = ""

  totalpagamento= 0
  alertButtons = ['okay']

  calcular(){
    if(this.transporte == 'leve'){
     this.totalTransporte = parseFloat(this.quilometro) * this.leve
    }else if (this.transporte == 'medio'){
      this.totalTransporte = parseFloat(this.quilometro) * this.medio
    }else if (this.transporte == 'pesado'){
      this.totalTransporte= parseFloat(this.quilometro) * this.pesado
    }else{
      this.res = 'selecione um tipo de transporte'
    }

    let vlseguro = 0
    let vlajd = 0
    let vlemb = 0
    let vlagnd = 0

    if (this.seguro == true && this.ajudante == true && this.embalagem == true && this.agendamento == true) {
      vlseguro = this.totalTransporte * 0.10
      vlajd = (parseFloat(this.hrT) * 80)
      vlemb =  50
      vlagnd = 30
      this.totalAdicionais = this.totalTransporte + vlseguro + vlajd + vlemb + vlagnd

      this.totalAdicionais = vlagnd + vlajd + vlemb + vlseguro
    } else if (this.seguro == true && this.ajudante == false && this.embalagem == false && this.agendamento == false) {
      vlseguro = this.totalTransporte * 0.1
      this.totalAdicionais = vlseguro
    } else if (this.seguro == false && this.ajudante == true && this.embalagem == false && this.agendamento == false) {
      this.totalAdicionais = (parseFloat(this.hrT) * 80)
    } else if (this.seguro == false && this.ajudante == false && this.embalagem == true && this.agendamento == false) {
      this.totalAdicionais = 50
    } else if (this.seguro == false && this.ajudante == false && this.embalagem == false && this.agendamento == true) {
      this.totalAdicionais = 30
    } else if (this.seguro == true && this.ajudante == true && this.embalagem == false && this.agendamento == false) {
      vlseguro = this.totalTransporte * 0.1
      this.totalAdicionais = vlseguro
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlseguro + vlajd
    } else if (this.seguro == true && this.ajudante == false && this.embalagem == true && this.agendamento == false) {
      vlseguro = this.totalTransporte * 0.1
      this.totalAdicionais = vlseguro

      this.totalAdicionais = vlseguro + 50
    } else if (this.seguro == true && this.ajudante == false && this.embalagem == false && this.agendamento == true) {
      vlseguro = this.totalTransporte * 0.1
      this.totalAdicionais = vlseguro

      this.totalAdicionais = vlseguro + 30
    } else if (this.seguro == false && this.ajudante == true && this.embalagem == true && this.agendamento == false) {
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlajd + 50
    } else if (this.seguro == false && this.ajudante == true && this.embalagem == false && this.agendamento == true) {
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlajd + 30
    } else if (this.seguro == false && this.ajudante == false && this.embalagem == true && this.agendamento == true) {

      this.totalAdicionais = 50 + 30
    }
    else if (this.seguro == true && this.ajudante == true && this.embalagem == true && this.agendamento == false) {
      vlseguro = this.totalTransporte * 0.1
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlseguro + vlajd + 50
    } else if (this.seguro == true && this.ajudante == true && this.embalagem == false && this.agendamento == true) {
      vlseguro = this.totalTransporte * 0.1
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlseguro + vlajd + 30
    } else if (this.seguro == true && this.ajudante == false && this.embalagem == true && this.agendamento == true) {
      vlseguro = this.totalTransporte * 0.1
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais = vlseguro + 50 + 30
    } else if (this.seguro == false && this.ajudante == true && this.embalagem == true && this.agendamento == true) {
      vlajd = (parseFloat(this.hrT) * 80)

      this.totalAdicionais =  vlajd + 50 + 30
    }





    if(this.pagamento == 'pix'){
      this.totalpagamento = this.totalTransporte * 0.10
    } else if (this.pagamento == 'credito') {
      this.totalpagamento = 0
    }
    else {
      this.res= 'selecione uma forma de pagamento'
    }
    let vlesp = 0

    if(this.especial == 'primeiraviagem'){
      this.totalEspecial = this.totalTransporte * 0.05
    }

    this.total = (this.totalTransporte - this.totalEspecial - this.totalpagamento + this.totalAdicionais).toFixed(2)
    
    this.res = "R$ " + this.total
    this.res2 = 'Acrescimo por adicionais: R$' + this.totalAdicionais.toFixed(2) + " Desconto por forma de pagamento: R$ " + this.totalpagamento.toFixed(2) + " Desconto por cupom PRIMEIRAVIAGEM: R$ " + this.totalEspecial.toFixed(2)



  }

}
