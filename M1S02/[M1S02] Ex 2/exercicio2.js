let idade = prompt("Informe a idade: ");
while (isNaN(idade) || idade <= 0) {
  idade = prompt("Informe uma idade válida: ");
}
if (idade <= 15) {
  alert(`${idade}: Jovem`);
} else if (idade <= 64) {
  alert(`${idade}: Adulto`);
} else {
  alert(`${idade}: Idoso`);
}
