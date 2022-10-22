do {
    var inicial = parseInt(prompt("Informe o valor inicial: "));
    var raiz = parseInt(prompt("Informe o valor da raiz: "));
  } while (isNaN(raiz) || isNaN(inicial));
  
  let valores = [];
  for (let i = 0; i < 10; i++) {
    valores.push(inicial);
    inicial += raiz;
  }
  alert(`P.A = ${valores}`);
  