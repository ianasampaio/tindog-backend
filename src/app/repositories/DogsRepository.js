const db = require('../../database');

class DogsRepository {
  // eslint-disable-next-line class-methods-use-this
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
}

module.exports = new DogsRepository();
