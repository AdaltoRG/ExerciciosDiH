let operador = prompt("Informe o operador: ");
let num1 = prompt("Informe o primeiro número: ");
let num2 = prompt("Informe o segundo número: ");
let resuldado;

switch (operador) {
  case "+":
    resuldado = num1 + num2;
    break;
  case "-":
    resuldado = num1 - num2;
    break;
  case "*":
    resuldado = num1 * num2;
    break;
  case "/":
    resuldado = num1 / num2;
    break;
  default:
    resuldado = "inválido";
}
alert(`Resultado: ${resuldado}`);
