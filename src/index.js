const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({ status: "OK", message: "Servidor seguro validado por CI" });
});
app.listen(PORT, () => {
  console.log(`App corriendo en puerto ${PORT}`);
});
codigo_roto_sin_sentido(
