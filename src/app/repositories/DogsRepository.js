const db = require('../../database');

class DogsRepository {
  async create(
    idUser,
    name,
    gender,
    breed,
    age,
    description,
		picture,
  ) {
    const [row] = await db.query(
      `
      INSERT INTO dogs(user_id,name, gender, breed, age, description, picture)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
      [idUser, name, gender, breed, age, description, picture],
    );
    return row;
  }

	async findByUserId(userId) {
		const [row] = await db.query('SELECT * FROM dogs WHERE user_id = $1', [userId]);
    return row;
	}
}

module.exports = new DogsRepository();
