const express = require('express');
const router = express.Router();

// simulación de base de datosx
let products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 }
];

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json(products);
});

// Crear un nuevo producto
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

module.exports = router;
