let fim,
  contImpar = 0,
  contPar=0;


while (isNaN(fim)) {
  fim = parseInt(prompt("Informe um número para saber quantos pares e impares existem de 0 até o número digitado: "));
}
for (let i = 0; i <= fim; i++) {
  if (i % 2 === 0) {
    contPar++;
  } else {
    contImpar++;
  }
}
alert(`Número ímpares: ${contImpar}
Número pares: ${contPar}`)
