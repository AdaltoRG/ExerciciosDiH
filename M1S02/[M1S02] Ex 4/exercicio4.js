let parcela;
let resultado = 0;

while (parcela !== -1) {
  parcela = parseInt(prompt("Informe um número ('-1' para interromper): "));
  if (isNaN(parcela)) continue;
  if (parcela === -1) break;
  resultado += parcela;
}
alert(`Resultado: ${resultado}`);
