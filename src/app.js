const express = require('express');
const { calculerTTC } = require('./tva');

const app = express();
const VERSION = process.env.APP_VERSION || 'dev';

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: VERSION });
});

app.get('/prix', (req, res) => {
  const ht = Number(req.query.ht);
  try {
    res.json({ ht, ttc: calculerTTC(ht) });
  } catch (err) {
    res.status(400).json({ erreur: err.message });
  }
});

module.exports = app;
