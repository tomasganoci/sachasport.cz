const path = require('path');

module.exports = {
  entry: './js/sachasport.js',  // Vstupní bod, kde začíná bundlování
  output: {
    filename: 'sachasport.js',  // Název výstupního souboru
    path: path.resolve(__dirname, 'public'),  // Cesta k výstupní složce
  },
  mode: 'production',  // Můžete použít 'development' pro vývojové prostředí
};
