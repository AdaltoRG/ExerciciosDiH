const pessoa = {
    nome: "Ada",
    idade: 36,
    profissao: "matemática",
  };
  
  const exibeMensagem = ({ nome, idade, profissao }) => `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
  
  console.log(exibeMensagem(pessoa));
  