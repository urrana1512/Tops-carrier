const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

// Task 20: Unit Testing with Mocha and Chai
describe('🔍 API_INTEGRITY_SUITE', () => {
    
    // Requirement: Verify correct response for success scenario
    describe('GET /api/ping', () => {
        it('Should return a SUCCESS status and "Pong" message', async () => {
            const res = await request(app).get('/api/ping');
            
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.equal('SUCCESS');
            expect(res.body.message).to.equal('Pong');
        });
    });

    describe('POST /api/echo', () => {
        // Requirement: Verify success scenario
        it('Should echo the provided message correctly', async () => {
            const payload = { message: "Nexus_Protocol_Alpha" };
            const res = await request(app)
                .post('/api/echo')
                .send(payload);

            expect(res.status).to.equal(200);
            expect(res.body.status).to.equal('SUCCESS');
            expect(res.body.echoed).to.equal(payload.message);
        });

        // Requirement: Verify correct response for error scenario
        it('Should return 400 ERROR if message is missing from payload', async () => {
            const res = await request(app)
                .post('/api/echo')
                .send({}); // Missing message

            expect(res.status).to.equal(400);
            expect(res.body.status).to.equal('ERROR');
            expect(res.body.message).to.contain('mandatory');
        });
    });
});
