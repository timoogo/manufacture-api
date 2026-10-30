const { RemiseError } = require('../src/constants');
const { calculerRemise } = require('../src/remise');

test('Il devrait retourner un prix remisé de 150 € pour un prix initial de 200 € avec une remise de 25 %.', () => {
  expect(calculerRemise(200, 25)).toBe(150);
});


test('Il devrait retourner un prix remisé de 90 € pour un prix initial de 100 € avec une remise de 10 %..', () => {
  expect(calculerRemise(100, 10)).toBe(90);
});


test("Il devrait retourner une erreur HTTP 400 avec le message « Remise invalide » lorsqu'une remise de 120 % est appliquée", () => {
  expect(() => calculerRemise(100, 120)).toThrow(RemiseError);
});

test('Il devrait rejeter un prix négatif', () => {
  expect(() => calculerRemise(-100, 20)).toThrow('Prix invalide');
});