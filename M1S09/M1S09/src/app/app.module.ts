import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ModalComponent } from './modal/modal.component';
import { BotaoComponent } from './formulario-registro/botao/botao.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerieFavoritaComponent } from './serie-favorita/serie-favorita.component';
import { ItemCardComponent } from './serie-favorita/item-card/item-card.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BuscaComponent } from './busca/busca.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ModalComponent,
    BotaoComponent,
    NavbarComponent,
    SerieFavoritaComponent,
    ItemCardComponent,
    LoginComponent,
    BuscaComponent,],
  imports: [
    BrowserModule,
    FormsModule, //import para o funcionamento do ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
