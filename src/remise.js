
const { RemiseError, PrixInvalideError } = require('./constants');


function calculerRemise(prixHT, pourcentage = 20) {
  if (typeof prixHT !== 'number' || Number.isNaN(prixHT) || prixHT < 0) {
    throw new Error(PrixInvalideError);
  }
  if (
    !Number.isFinite(pourcentage) ||
    pourcentage < 0 ||
    pourcentage > 100
  ) {
    throw new Error(RemiseError);
  }

  return Math.round(prixHT * (1 - pourcentage / 100) * 100) / 100;
}

module.exports = { calculerRemise: calculerRemise };

