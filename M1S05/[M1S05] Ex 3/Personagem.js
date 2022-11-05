export default class Personagem {
  nome;
  percentualVida = 100;
  constructor(nome) {
    this.nome = nome;
  }
  sofreuDano(percentualDano) {
    this.percentualVida =
      this.percentualVida - percentualDano < 0
        ? 0
        : this.percentualVida - percentualDano;
  }
  usouKitMedico() {
    this.percentualVida =
      this.percentualVida > 90 ? 100 : this.percentualVida + 10;
  }
}
