function sleep(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, valor);
  });
}
sleep('teste')
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch((erro) => console.log(`Erro: ${erro}`));
