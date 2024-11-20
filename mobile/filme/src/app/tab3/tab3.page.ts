import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  toastController: ToastController;
  alertController: AlertController;

  constructor(public router: Router, toastController: ToastController, alertController: AlertController) {
    this.toastController = toastController;
    this.alertController = alertController;
  }
  listarAtor : IAtores[] = [
    {
      nome: "Jenna Ortega",
      nascimento: '27 de setembro de 2002 (22 de Idade)',
      genero: 'feminino',
      informacao: 'Jenna Ortega é uma atriz norte-americana que ficou conhecida devido aos seus papéis como Harley Diaz em Stuck in the Middle, do Disney Channel e Ellie Alves em You, da Netflix.',
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg',
      favorito: false
    },
    {
      nome: "Will Smith",
      nascimento: '25 de setembro de 1968 (56 de Idade)',
      genero: 'masculino',
      informacao: 'Willard Carroll “Will” Smith Jr. (Filadélfia, 25 de setembro de 1968) é um ator, rapper, produtor cinematográfico, produtor musical e produtor de televisão americano. É filho do ator e humorista Willard Carroll Smith Sr. e da cantora Caroline Bright. Ele é mais conhecido pelas atuações em Bad Boys, Independence Day, Eu, Robô, Eu Sou a Lenda, Hancock, MIB: Homens de Preto. Smith já foi duas vezes indicado ao Oscar de melhor ator pelas atuações em Ali e À Procura da Felicidade.',
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1QqaRZ8neYlqLx7ODZC4as47wUV.jpg',
      favorito: false
    },
    {
      nome: "Scarlett Johansson",
      nascimento: '22 de novembro de 1984 (39 de Idade',
      genero: 'feminino',
      informacao: 'Scarlett Ingrid Johansson (nascida em 22 de novembro de 1984) é uma atriz americana. Ela é foi a atriz mais bem paga do mundo em 2018 e 2019, e somados, seus filmes arrecadaram mais de US$ 14,3 bilhões mundialmente, tornando ela a nona artista com maior bilheteria na história. Ela recebeu vários prêmios, incluindo um Tony e um BAFTA, além de duas indicações para o Oscar e cinco para o Globo de Ouro.',
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
      favorito: false
    },
    {
      nome: "Min Do-yoon",
      nascimento: '4 de maio de 1983 (41 de Idade)',
      genero: 'masculino',
      informacao: 'A peça começou com um ator mirim, e ele pertencia ao clube de teatro ainda no ensino médio. Começou o negócio de ator em grande escala aos 27 anos. Ele tem um corpo bem treinado e muitos vilões têm uma imagem forte, mas ele também é bom em papéis cômicos. Ele está aprendendo japonês e buscando atividades no Japão. Aparições principais incluem "Forbidden Sex", "Yongjugol" e "Studio 2.0"',
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bHHn3krbHyxQIWb4JbHkPlV6Uu1.jpg',
      favorito: false
    },
    {
      nome: "Pedro Pascal",
      nascimento: '2 de abril de 1975 (49 de Idade)',
      genero: 'Masculino',
      informacao: 'Jose Pedro Balmaceda Pascal (Santiago, 2 de abril de 1975) é um ator chileno-americano. Começou sua carreira no teatro e com alguns papéis pequenos na televisão. Ficou conhecido internacionalmente no papel de Oberyn Martell na quarta temporada da série Game of Thrones da HBO, Javier Peña na série Narcos da Netflix, o Mandaloriano na primeira série live-action de Star Wars The Mandalorian do Disney+ e Joel Miller na série The Last of Us da HBO.',
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg',
      favorito: false
    },
  ]

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}}
    this.router.navigate(['ator-detalhes'],navigationExtras)
  }

  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.toastController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
