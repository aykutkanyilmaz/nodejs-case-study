const request = require('supertest');
const http = require('http');

const mongoose = require('../../src/loaders/mongoose-loader');
const app = require('../../src/app');

describe('Test records router', () => {
    let server;

    beforeAll(done => {
        app.set('port', 4000);
        server = http.createServer(app);
        server.listen(done);
    });

    afterAll(done => {
        mongoose.connection.close()
        server.close(done);
    });


    it('GET / records , should reject http GET Method', () => request(server)
        .get('/records')
        .expect(405));


    it('PUT / records , should reject http PUT Method', () => request(server)
        .put('/records')
        .expect(405));

    it('DELETE / records , should reject http DELETE Method', () => request(server)
        .delete('/records')
        .expect(405));

    it('Post /records empty body , should return http 422 code', () => request(server)
        .post('/records').send({
        })
        .expect(422));

    it('Post /records missing startDate field , should return http 422 code', () => request(server)
        .post('/records').send({
            endDate: "2018-02-02",
            minCount: 2700,
            maxCount: 3000
        })
        .expect(422));

    it('Post /records missing endDate field , should return http 422 code', () => request(server)
        .post('/records').send({
            startDate: "2016-01-26",
            minCount: 2700,
            maxCount: 3000
        })
        .expect(422));
    it('Post /records missing minCount field , should return http 422 code', () => request(server)
        .post('/records').send({
            startDate: "2016-01-26",
            endDate: "2018-02-02",
            maxCount: 3000
        })
        .expect(422));
        it('Post /records missing maxCount field , should return http 422 code', () => request(server)
        .post('/records').send({
            startDate: "2016-01-26",
            endDate: "2018-02-02",
            minCount: 2700
        })
        .expect(422));

        it('Post /records  maxCount less than minCount , should return http 422 code', () => request(server)
        .post('/records').send({
            startDate: "2016-01-26",
            endDate: "2018-02-02",
            minCount: 3700,
            maxCount: 3000
        })
        .expect(422));

        it('Post /records  startDate after endDate , should return http 422 code', () => request(server)
        .post('/records').send({
            startDate: "2026-01-26",
            endDate: "2018-02-02",
            minCount: 2700,
            maxCount: 3000
        })
        .expect(422));

    it('Post /records , should return http 200 code', () => request(server)
        .post('/records').send({
            startDate: "2016-01-26",
            endDate: "2018-02-02",
            minCount: 2700,
            maxCount: 3000
        })
        .expect(200));


}); 