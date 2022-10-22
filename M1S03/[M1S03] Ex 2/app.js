const entrada = document.getElementById("exibir");
const nome = document.getElementById("entrada");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  entrada.innerText = `Olá, ${nome.value}!`;
  return console.log(`Olá, ${nome.value}!`);
});
