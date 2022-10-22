const somaTudo = (...args) => {
    return args.reduce((soma, num) => {
      return soma + num;
    });
  };
  console.log(somaTudo(1, 2, 3, 4));
  