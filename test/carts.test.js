const request = require('supertest');
const app = require('../app.js');

describe('Carts Router', () => {
    it('Debería obtener el carrito de un usuario', async () => {
        const res = await request(app).get('/carts/some-user-id');
        expect(res.status).to.equal(200);
    });
});
