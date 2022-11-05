export default class Fatura {
  id;
  descricao;
  quantia;
  preco;
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia < 0 ? 0 : quantia;
    this.preco = preco < 0 ? 0 : preco;
  }
  obterValorTotal() {
    return parseFloat(this.preco) * parseInt(this.quantia);
  }
  get valorTotal() {
    return parseFloat(this.preco) * parseInt(this.quantia);
  }
}
