const express = require('express');
const router = express.Router();

let sessions = {};

// Iniciar sesión
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Validación básica de email y password
    if (email === 'test@example.com' && password === 'password123') {
        const token = 'some-valid-token'; // Generar un token de autenticación
        sessions[token] = { email }; // Almacenar sesión

        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

// Cerrar sesión
router.delete('/', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token && sessions[token]) {
        delete sessions[token];
        res.json({ message: 'Sesión cerrada' });
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

module.exports = router;
