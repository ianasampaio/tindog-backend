const db = require('../../database');

class UsersRepository {
  async findAll(){
    const rows = await db.query(`
    SELECT * FROM users
    `);
    return rows;
  }

  async findById(id){
    const [row] = await db.query('SELECT id, name, email, state, city FROM users WHERE id = $1', [id]);
    return row;
  }

	async findByEmail(email){
    const [row] = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return row;
  }

  async create(name, email, password) {
    const [row] = await db.query(`
      INSERT INTO users(name, email, password)
      VALUES($1, $2, $3)
      RETURNING *
    `
    , [name, email, password]);
    return row;
  }

  update() {

  }

  delete() {

  }
}

module.exports = new UsersRepository();