import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}
  criaLogin(chave: string, valor: string): void {
    localStorage.setItem(chave,valor);
    
  }
}
