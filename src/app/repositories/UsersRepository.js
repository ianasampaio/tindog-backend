const db = require('../../database');

class UsersRepository {
  async findAll() {
    const rows = await db.query(`
    SELECT * FROM users
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT id, name, email, state, city FROM users WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return row;
  }

  async create(name, email, password) {
    const [row] = await db.query(
      `
      INSERT INTO users(name, email, password)
      VALUES($1, $2, $3)
      RETURNING *
    `,
      [name, email, password],
    );
    return row;
  }

  async update(id, {
    name, email, passwordHash, state, city,
  }) {
    const [row] = await db.query(`
      UPDATE users
      SET name = $2, email = $3, password = $4, state = $5, city = $6
      WHERE id = $1
      RETURNING *
    `, [id, name, email, passwordHash, state, city]);
    return row;
  }

  delete() {

  }
}

module.exports = new UsersRepository();
