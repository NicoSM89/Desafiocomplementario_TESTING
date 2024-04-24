const express = require('express');
const router = express.Router();

let carts = {};

// Obtener el carrito
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const cart = carts[userId] || { items: [] };

    res.json(cart);
});

// Agregar un producto al carrito
router.post('/:userId/add', (req, res) => {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    let cart = carts[userId] || { items: [] };
    const item = cart.items.find(i => i.productId === productId);

    if (item) {
        item.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }

    carts[userId] = cart;

    res.json(cart);
});

// Eliminar un producto del carrito
router.delete('/:userId/remove/:productId', (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    let cart = carts[userId] || { items: [] };
    cart.items = cart.items.filter(i => i.productId !== productId);

    carts[userId] = cart;

    res.json(cart);
});

module.exports = router;
