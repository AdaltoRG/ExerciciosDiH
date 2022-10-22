let fator = prompt("Informe um número: ");
let resultado = '';
while (isNaN(fator)) {
  fator = prompt("Informe um número válido: ");
}
for (let i = 0; i <= 10; i++) {
  resultado += `${fator} x ${i} = ${fator * i}${i==10?'':'\n'}`;
}
alert(resultado);
