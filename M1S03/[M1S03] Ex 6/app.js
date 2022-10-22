const verificaPalindromo = (texto) => {
    if (typeof texto !== "string") {
      console.log("Texto inválido!");
      return;
    }
    return [...texto].reverse().join("") === texto;
  };
  
  const teste1 = verificaPalindromo("ana");
  const teste2 = verificaPalindromo("julia");
  console.log(teste1);
  console.log(teste2);
  