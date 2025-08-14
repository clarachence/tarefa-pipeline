const { soma, subtracao } = require('../src/calculadora');

test('Soma de 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('Subtração de 5 - 3 = 2', () => {
    expect(subtracao(5, 3)).toBe(2);
});
