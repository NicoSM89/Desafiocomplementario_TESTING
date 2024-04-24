require('dotenv').config();

const express = require('express');
const app = express();

//routers
const productsRouter = require('./Routers/productsRouter');
const cartsRouter = require('./Routers/cartsRouter');
const sessionsRouter = require('./Routers/sessionsRouter');

// parsear JSON
app.use(express.json());

// Middleware paraouters
app.use('/products', productsRouter);
app.use('/carts', cartsRouter);
app.use('/sessions', sessionsRouter);

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Puerto servidor
const PORT = process.env.PORT || 8080;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app; // Exporta la aplicación para pruebas
