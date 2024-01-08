const chai = await import('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await chai
      .request(app)
      .post('/api/users')
      .send({ username: 'testuser', email: 'test@example.com' });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('username', 'testuser');
    expect(res.body).to.have.property('email', 'test@example.com');
  });

  it('should update a user', async () => {
    const newUser = await chai
      .request(app)
      .post('/api/users')
      .send({ username: 'testuser', email: 'test@example.com' });

    const res = await chai
      .request(app)
      .put(`/api/users/${newUser.body._id}`)
      .send({ username: 'updateduser' });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('username', 'updateduser');
  });

  it('should get a list of users', async () => {
    const res = await chai.request(app).get('/api/users');

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });
});
