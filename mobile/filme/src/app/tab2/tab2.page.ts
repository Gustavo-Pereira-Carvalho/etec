import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  toastController: ToastController;
  alertController: AlertController;

  constructor(public router: Router, toastController: ToastController, alertController: AlertController) {
    this.toastController = toastController;
    this.alertController = alertController;
  }

  listarSerie : ISerie[] = [
    {
      nome: "Grey's Anatomy",
      lancamento: '2005',
      sobre: 'Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/nDkcmSOgQTp7cDrMczPKCNa8SZQ.jpg',
      generos: ['Drama'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Cobra Kai',
      lancamento: '2018',
      sobre: 'Nesta aclamada série que é continuação dos filmes Karatê Kid, Daniel e Johnny retomam a rivalidade dos tempos de escola.',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg',
      generos: ['Ação','Aventura', 'Comédia', 'Drama'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Sobrenatural',
      lancamento: '2005',
      sobre: 'Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg',
      generos: ['Fantasia', 'Drama', 'Mistério', 'Sci-Fi'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Prison Break: Em Busca da Verdade ',
      lancamento: '2005',
      sobre: 'Lincoln Burrows é condenado injustamente à pena de morte. Só lhe resta confiar no irmão Michael Scofield, que executa um plano de fuga e se vê no meio de uma perigosa conspiração.',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lJiJ4sEYQPIwjX6jLfT10dMBZ6p.jpg',
      generos: ['Ação', 'Aventura', 'Crime', 'Drama'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Arqueiro',
      lancamento: '2012',
      sobre: 'Após um violento naufrágio, o playboy milionário Oliver Queen é dado como morto. Cinco anos depois, é resgatado de uma ilha do Pacífico e enviado de volta para Starling City, onde passa a agir como vigilante secreto.',
      classificacao: 6,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oaLXsduGoDOOftWziIOvyZzrR4T.jpg',
      generos: ['Crime', 'Drama', 'Ação', 'Aventura'],
      pagina: '',
      favorito: false
    },
  ]


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}}
    this.router.navigate(['serie-detalhe'],navigationExtras)
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.toastController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
