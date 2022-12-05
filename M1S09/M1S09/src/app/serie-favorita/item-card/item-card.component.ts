import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  personagem: any = {
    nome: 'Wandinha',
    imagem:
      'https://www.ofuxico.com.br/wp-content/uploads/2022/11/wandinha-jenny-ortega-seria-em-poster-serie-netflix.jpg',
    nomeAtor: 'Jenna Ortega',
    descricao:
      'Jenna Marie Ortega é uma atriz norte-americana que ficou conhecida devido aos seus papéis como Harley Diaz em Stuck in the Middle, do Disney Channel e Ellie Alves em You e Wednesday, da Netflix.',
  };
}
