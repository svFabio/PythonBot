const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Servidor Node.js funcionando!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error('Error al iniciar el servidor:', err);
  }
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


