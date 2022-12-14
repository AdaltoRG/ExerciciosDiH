import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhillipsPipe } from './pipes/captalize-phillips.pipe';
import { NavComponent } from './nav/nav.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicio5/exercicio5.component';
import { Exercicio7Component } from './exercicio7/exercicio7.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhillipsPipe,
    NavComponent,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
