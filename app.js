const express = require('express');
const app = express();
const port = 3000;

// Ruta de ejemplo
app.use(express.static('public'));

// Inicia el servidor
app.listen(port, () => {
  console.log(`El servidor está funcionando en http://localhost:${port}/`);
});

