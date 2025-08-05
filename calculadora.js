function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisor não pode ser zero");
  }
  return a / b;
}

// função porcentagem(a, b)

function porcentagem(a, b){
    return (a * b) / 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };

