const express = require('express');
const app = express();

const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para manejar la solicitud POST en /lead
app.post('/lead', (req, res) => {
  const { message, phone } = req.body;
  console.log(`Mensaje recibido: ${message}, Enviado a: ${phone}`);
  // Aquí puedes agregar lógica para procesar el mensaje o almacenarlo
  res.status(200).send('Mensaje recibido');
});

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡Servidor Node.js funcionando!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error('Error al iniciar el servidor:', err);
  }
  console.log(`Servidor corriendo en http://localhost:${port}`);
});




