import { Component, Query } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  quantia = ''
  dependentes = ''
  despesas = ''

  qntdp = ''
  descdp = ''

  qntdpm = ''
  desm = ''
  teto = parseFloat(this.quantia) * 0.20

  res = ''
  res2 = ''
  des = ''
  alertButtons = ['Action'];
  calcular() {
    let imposto = 0;
    let quantiaNum = parseFloat(this.quantia);

    // Cálculo do imposto
    if (quantiaNum <= 2112) {
      this.res = 'Isento do imposto';
      return; // Interrompe a execução se isento
    } else if (quantiaNum <= 2828) {
      imposto = quantiaNum * 0.075;
    } else if (quantiaNum <= 3744) {
      imposto = quantiaNum * 0.15;
    } else if (quantiaNum <= 4660) {
      imposto = quantiaNum * 0.225;
    } else {
      imposto = quantiaNum * 0.275;
    }

    let descontoDependentes = 0;
    let descontoDespesas = 0;

    // Aplicar desconto por dependentes
    if (this.dependentes === 'simd') {
      descontoDependentes = parseFloat(this.qntdp) * 0.025 * imposto;
    }

    // Aplicar desconto por despesas médicas
    if (this.despesas === 'sim') {
      let tetoDespesas = quantiaNum * 0.20;
      if (parseFloat(this.qntdpm) > tetoDespesas) {
        descontoDespesas = tetoDespesas;
      } else {
        descontoDespesas = parseFloat(this.qntdpm);
      }
    }

    // Aplicar descontos
    let impostoFinal = imposto - descontoDependentes - descontoDespesas;
    impostoFinal = Math.max(0, impostoFinal); // Garante que o valor não seja negativo

    // Formatando os resultados
    this.descdp = descontoDependentes > 0 ? descontoDependentes.toFixed(2) : 'Sem desconto';
    this.des = descontoDespesas > 0 ? descontoDespesas.toFixed(2) : 'Sem desconto';
    this.res = impostoFinal.toFixed(2);

    // Mensagem final
    this.res2 = `Valor declarado: ${this.quantia},00\n` +
                `Total de desconto por ${this.qntdp} dependentes: ${this.descdp}\n` +
                `Total de desconto por despesas médicas: ${this.des}\n` +
                `Total a pagar de imposto: ${this.res}`;
  }
}
