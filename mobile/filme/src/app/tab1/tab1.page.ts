import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  toastController: ToastController;
  alertController: AlertController;

  constructor(public router: Router, toastController: ToastController, alertController: AlertController) {
    this.toastController = toastController;
    this.alertController = alertController;
  }

  listarFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://br.web.img2.acsta.net/c_310_420/pictures/21/03/31/18/22/5366148.png',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '1h50m',
      classificacao: 6,
      cartaz: 'https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685234/poster-os-vingadores-ultimato-e-e845a7aa.jpg',
      generos: ['Aventura', 'Ficção Cientifica', 'Ação'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Robot Selvagem',
      lancamento: '10/10/2024',
      duracao: '1h1m',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/kBG5VhrFXklR8iCnJ88G6hkITci.jpg',
      generos: ['Animação', 'Ficção Cientifica', 'Familia'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'Deadpool & Wolverine',
      lancamento: '25/07/2024',
      duracao: '2h8m',
      classificacao: 7,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/53YWSo75mSaw1vd2YEeX5kwkRos.jpg',
      generos: ['Ação', 'Comédia', 'Ficção Cientifica'],
      pagina: '',
      favorito: false
    },
    {
      nome: 'A Forja – O Poder da Transformação',
      lancamento: '26/09/2024',
      duracao: '2h3m',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zMXWRL4uhtpNTXVeMHsFHmXQRt0.jpg',
      generos: ['Drama', 'Família'],
      pagina: '',
      favorito: false
    }
  ];

 
  exibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

 
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.toastController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
