const array = [20, 10, 30];
let max, min;

const procuraMinMax = (numeros) => {
  if (!Array.isArray(numeros) || !numeros.length) {
    console.log("Não é possivel encontrar.");
    return;
  }
  max = numeros[0];
  min = numeros[0];
  numeros.forEach((numero) => {
    numero > max ? (max = numero) : "";
    numero < min ? (min = numero) : "";
  });
  console.log({ min, max });
};
procuraMinMax(array);
