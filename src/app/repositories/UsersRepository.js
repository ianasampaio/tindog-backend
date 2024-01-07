const db = require('../../database');

class UsersRepository {
  async findAll(){
    const rows = await db.query(`
    SELECT * FROM users
    `);
    return rows;
  }

  findById() {

  }

  findByEmail() {

  }

  create() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new UsersRepository();