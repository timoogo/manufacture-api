const { calculerTTC } = require('../src/tva');

test('100 euros HT font 120 euros TTC', () => {
  expect(calculerTTC(100)).toBe(999);
});

test('le taux reduit de 5,5 % fonctionne', () => {
  expect(calculerTTC(10, 5.5)).toBe(10.55);
});

test('un prix negatif est refuse', () => {
  expect(() => calculerTTC(-5)).toThrow('Prix invalide');
});
