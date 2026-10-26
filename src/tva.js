function calculerTTC(prixHT, taux = 20) {
  if (typeof prixHT !== 'number' || Number.isNaN(prixHT) || prixHT < 0) {
    throw new Error('Prix invalide');
  }
  return Math.round(prixHT * (1 + taux / 100) * 100) / 100;
}

module.exports = { calculerTTC };

