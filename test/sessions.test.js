const request = require('supertest');
const app = require('../app');

describe('Sessions Router', () => {
    it('Debería iniciar sesión con credenciales válidas', async () => {
        const res = await request(app)
            .post('/sessions')
            .send({ email: 'nsalamanca.murgas@gmail.com', password: 'password123' });
        expect(res.status).to.equal(200);
    });
});
