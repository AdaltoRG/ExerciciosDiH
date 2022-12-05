import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ModalComponent } from './formulario-registro/modal/modal.component';
import { BotaoComponent } from './formulario-registro/botao/botao.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerieFavoritaComponent } from './serie-favorita/serie-favorita.component';
import { ItemCardComponent } from './serie-favorita/item-card/item-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ModalComponent,
    BotaoComponent,
    NavbarComponent,
    SerieFavoritaComponent,
    ItemCardComponent,],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
