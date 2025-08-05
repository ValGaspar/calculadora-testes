
const { somar, subtrair, multiplicar, dividir, porcentagem} = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

// testes com números negativos.

test('soma de dois números negativos', () => {
    expect(somar(-4, -3)).toBe(-7);
});

test('subtrair número positivo de negativo', () => {
    expect(subtrair(6, -6)).toBe(12)
});

test('multiplicar com numeros negativos', () => {
    expect(multiplicar(-2, 8)).toBe(-16);
});

test('deve dividir número positivo por número negativo certo', () => {
  expect(dividir(10, -5)).toBe(-2);
});

// Adicione testes com null ou undefined.

test('somar com null deve retornar NaN', () => {
   expect(somar(null, 3)).toBe(3);
});

test('multiplicar com undefined deve retornar NaN', () => {
  expect(multiplicar(undefined, 3)).toBeNaN();
});


// Teste de comportamente da função porcentagem
test('deve dividir número positivo por número negativo certo', () => {
  expect(dividir(10, -5)).toBe(-2);
});
