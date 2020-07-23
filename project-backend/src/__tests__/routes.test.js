const app = require('../index');
const request = require('supertest');
const db = require('../config/database')

describe('CREATE /users', () => {
  test('Should post user to db', async done => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Suminem',
        email:'Suminem@gmail.com',
        password:'dweSSA.44',
        phone:'081263276672',   
        role:3
      })

    // expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data.name).toBe('Suminem');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Data successfully created');

    // make sure we have 8 users now
    // const response = await request(app).get("/users");
    // expect(response.body.data).toHaveLength(8);
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
    // make sure we have 16 users now
    // expect(res.body.data).toHaveLength(9);
    done()
  });

  // test('Should get all users', async done => {
  //   const res = await request(app).get('/users');
  //   // expect(res.body).toHaveProperty('data');
  //   expect(res.statusCode).toEqual(404);
  //   expect(res.body.message).toBe('Data not found');
    
  //   // make sure we have 16 users now
  //   // expect(res.body.data).toHaveLength(9);
  //   done()
  // });

});

describe('GET /users/:id', () => {
  test('Should get user by id', async done => {
    const res = await request(app).get('/users/262');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Success to get user by id');
    // expect(res.body).toHaveProperty('data');
    done();
  });
  test('Should response with status code 404 if ID not found', async done => {
    const res = await request(app).get('/users/2');
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toBe('ID does not exists');
    done();
  });
  

  // test('Should response with status code 500 if server error', async done => {
  //   const res = await request(app).get('/users/2');
  //   expect(res.statusCode).toEqual(500);
  //   expect(res.body.message).toBe('ID does not exists');
  //   done();
  // });
 
});
describe('UPDATE', () => {
  test('Should update user', async done => {
    const res = await request(app)
    .post('/users/305')
      .send({
        name: 'Safitri ',
        email:'safitri@gmail.com',
        password:'dsdfSD90!',
        phone:'081263276600',   
        role:3
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    // expect(res.body.data).toHaveProperty('name', 'arini');
    // expect(res.body.data).toHaveProperty('password', 'dsdfSD90!');
    expect(res.body.message).toBe('Updated successful');
    done();
  });
});

describe('DELETE /users/:id', () => {
//     afterEach(function () {
//     db.close();
// });
  test('should delete a user', async done => {
    const res = await request(app).delete('/users/395');
    expect(res.statusCode).toEqual(200);
    done();
  });
  test('should response with status code 404 if user not found', async done => {
    const res = await request(app).delete('/users/232');
    expect(res.statusCode).toEqual(404);
    done();
  });

})
