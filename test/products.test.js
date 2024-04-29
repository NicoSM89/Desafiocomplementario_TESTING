const request = require('supertest');
const app = require('../app');

describe('Products Router', () => {
    it('Debería obtener todos los productos', async () => {
        const res = await request(app).get('/products');
        expect(res.status).to.equal(200);
    });
});
