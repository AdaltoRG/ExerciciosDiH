import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css'],
})
export class Exercicio3Component {
  arrayFotos: any = [
    {
      url: 'https://s.sde.globo.com/media/organizations/2021/02/13/cruzeiro_2021.svg',
      description: 'Escudo do Cruzeiro',
    },
    {
      url: 'https://s.sde.globo.com/media/organizations/2018/03/12/gremio.svg',
      description: 'Escudo do Gremio',
    },
    {
      url: 'https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg',
      description: 'Escudo do Fortaleza',
    },
    {
      url: 'https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg',
      description: 'Escudo do Palmeiras',
    },
    {
      url: 'https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg',
      description: 'Escudo do Vasco',
    },
  ];
}
