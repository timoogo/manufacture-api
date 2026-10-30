const request = require('supertest');
const app = require('../src/app');

test('GET /health repond ok', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /prix calcule le prix TTC', async () => {
  const res = await request(app).get('/prix?ht=50');
  expect(res.body.ttc).toBe(60);
});

test('GET /prix refuse un prix invalide', async () => {
  const res = await request(app).get('/prix?ht=abc');
  expect(res.status).toBe(400);
});


test('GET /prix refuse un prix invalide', async () => {
  const res = await request(app).get('/prix?ht=-1');
  expect(res.status).toBe(400);
});

test('GET /remise calcule la remise', async () => {
  const prix = 200
  const pourcentage = 25
  const res = await request(app).get(`/remise?prix=${prix}&pourcentage=${pourcentage}`);


  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    prix: 200,
    pourcentage: 25,
    prixRemise: 150
  });
})

  test('GET /remise refuse un pourcentage invalide', async () => {
    const res = await request(app).get('/remise?prix=200&pourcentage=150');
  
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      erreur: 'Remise invalide'
    });


})