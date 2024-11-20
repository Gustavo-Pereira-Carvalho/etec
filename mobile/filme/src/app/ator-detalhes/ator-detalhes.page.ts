import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { IAtores } from '../model/IAtores';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ator-detalhes',
  templateUrl: './ator-detalhes.page.html',
  styleUrls: ['./ator-detalhes.page.scss'],
})
export class AtorDetalhesPage implements OnInit {
  ator: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.ator = getNav.extras.state["paramAtor"];
      }
    });
  }

}
