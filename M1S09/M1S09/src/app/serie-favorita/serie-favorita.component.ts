import { Component } from '@angular/core';

@Component({
  selector: 'app-serie-favorita',
  templateUrl: './serie-favorita.component.html',
  styleUrls: ['./serie-favorita.component.css']
})
export class SerieFavoritaComponent {
  personagem:any={
    nome:'Wandinha',
    imagem:'https://www.ofuxico.com.br/wp-content/uploads/2022/11/wandinha-jenny-ortega-seria-em-poster-serie-netflix.jpg',
    nomeAtor:'Jenna Ortega',
    descricao:'Jenna Marie Ortega é uma atriz norte-americana que ficou conhecida devido aos seus papéis como...'
  }
}
