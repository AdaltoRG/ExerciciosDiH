import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent {
  changeLido(item: any) {
    item.lido = !item.lido;
  }
  notificacoes = [
    {
      titulo: 'título',
      data: '22/12/2022',
      subtitulo: 'subtítulo',
      lido: false,
    },
    {
      titulo: 'teste 2',
      data: '11/11/2025',
      subtitulo: 'subTeste',
      lido: false,
    },
  ];
}
