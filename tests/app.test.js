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
