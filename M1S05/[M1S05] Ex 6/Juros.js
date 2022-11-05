export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }
  // C: Capital inicial
  // i: Taxa de jutos % (de 0 a 1)
  // t: Período de tempo
  // J: Montante de juros simples
  // M: Montante de juros compostos mais Capital inicial
  // Jc: M - C

  calcularJurosSimples() {
    return this.capitalInicial * this.taxaAplicada * this.tempo;
  }

  calculaJurosCompostos() {
    return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
  }
}
