const express = require('express');
const { calculerTTC } = require('./tva');
const { calculerRemise } = require('./remise');

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

app.get('/remise', (req, res) => {
  const prix = Number(req.query.prix);
  const pourcentage = Number(req.query.pourcentage);
  
  try {
    const prixAvecRemise =calculerRemise(prix, pourcentage);

    res.json({
      prix, 
      pourcentage,
      prixRemise: prixAvecRemise
      }
    )
  } catch (err) {
    res.status(400).json({ erreur: err.message });
  }
});

module.exports = app;
