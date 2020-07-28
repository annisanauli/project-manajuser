const app = require('../index');
const request = require('supertest');
const db = require('../config/database')

describe('CREATE /users', () => {
  test('Should post user to db', async done => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Sandra',
        email:'Sandra998@gmail.com',
        password:'PassQ1.44',
        phone:'081263276672',   
        role:3
      })

    // expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data.name).toBe('Sandra');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Data successfully created');
    done();
  });
 });

describe('GET /users', () => {
//   afterEach(function () {
//     db.close();
// });

  test('Should get all users', async done => {
    const res = await request(app).get('/users');
    expect(res.body).toHaveProperty('data');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Get all data is success');
    // make sure we have 4 users now
    // expect(res.body.data).toHaveLength(4);
    done()
  });
});

describe('GET /users/:id', () => {
  test('Should get user by id', async done => {
    const res = await request(app).get('/users/2');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Success to get user by id');
    // expect(res.body).toHaveProperty('data');
    done();
  });
  test('Should response with status code 404 if ID not found', async done => {
    const res = await request(app).get('/users/20');
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toBe('ID does not exists');
    done();
  });
  
 
});
describe('UPDATE /users/:id', () => {
  test('Should update user', async done => {
    const res = await request(app)
    .post('/users/3')
      .send({
        name: 'Joshua ',
        email:'Joeee12@gmail.com',
        password:'Abcd@188!',
        phone:'081263276654',   
        role:3
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    // expect(res.body.data).toHaveProperty('name', 'Joshua');
    expect(res.body.message).toBe('Updated successful');
    done();
  });
});

describe('DELETE /users/:id', () => {
  test('should delete a user', async done => {
    const res = await request(app).delete('/users/5');
    expect(res.statusCode).toEqual(200);
    done();
  });
  test('should response with status code 404 if user not found', async done => {
    const res = await request(app).delete('/users/20');
    expect(res.statusCode).toEqual(404);
    done();
  });

});
