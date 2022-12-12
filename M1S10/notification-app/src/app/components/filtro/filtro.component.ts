import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent {
  @Output() actionOutput: EventEmitter<string> = new EventEmitter();
  botoes = ['Todos', 'Não Lidos', 'Lidos'];
}
