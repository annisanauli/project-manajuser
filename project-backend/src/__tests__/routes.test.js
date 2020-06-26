const app = require('../App')
const request = require('supertest')
describe('test Endpoints', () => {
  test('should create a new post', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'hjua',
        email:'jua@gmail.com',
        password:'dweSSA.44',
        phone:'081263276672',   
        role:3
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    expect(res.body.message).toBe('Data successfully created')
  });

  test('should get all posts', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    // expect(res.body.data).toHaveLength(18);
    });

 
});
