const db = require('../../database');

class DogsRepository {
  async create(
    idUser,
    name,
    gender,
    breed,
    age,
    description,
  ) {
    const [row] = await db.query(
      `
      INSERT INTO dogs(user_id,name, gender, breed, age, description)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `,
      [idUser, name, gender, breed, age, description],
    );
    return row;
  }

	async findByUserId(userId) {
		const [row] = await db.query('SELECT id FROM dogs WHERE user_id = $1', [userId]);
    return row;
	}
}

module.exports = new DogsRepository();
