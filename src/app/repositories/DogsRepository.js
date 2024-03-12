const db = require('../../database');
const { findById } = require('./UsersRepository');

class DogsRepository {
  async create(
    idUser,
    name,
    gender,
    breed,
    age,
    description,
		picture,
		state,
		city
  ) {
    const [row] = await db.query(
      `
      INSERT INTO dogs(user_id,name, gender, breed, age, description, picture, state, city)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `,
      [idUser, name, gender, breed, age, description, picture, state , city],
    );
    return row;
  }

	async findByUserId(userId) {
		const [row] = await db.query('SELECT * FROM dogs WHERE user_id = $1', [userId]);
    return row;
	}

	async findById(id) {
		const [row] = await db.query(`
			SELECT name, gender, breed, age, description, picture, state, city FROM dogs
			WHERE id = $1
		`, [id]);
		return row;
	}
}

module.exports = new DogsRepository();