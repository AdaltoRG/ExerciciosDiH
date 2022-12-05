import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
})
export class BuscaComponent {
  @Output('busca') actionOutput: EventEmitter<any> = new EventEmitter();
  consoleBusca(){
    this.actionOutput.emit(this.textoBusca);
  }
  textoBusca: string = '';
}
