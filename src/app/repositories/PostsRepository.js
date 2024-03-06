const db = require('../../database');

class PostsRepository {
	async findAll() {
		const rows = await db.query(`
    	SELECT * FROM posts
    `);
    return rows;
	}

	async create(
		userId,
		dogId,
		content,
		image,
		createdAt,
		updatedAt,
	) {
		const [row] = await db.query(`
			INSERT INTO posts(user_id, dog_id, content, image, created_at, updated_at)
			VALUES($1, $2, $3, $4, $5, $6)
			RETURNING *
		`,
		[userId, dogId, content, image, createdAt, updatedAt]
		);
		return row;
	}

	update() {

	}

	delete() {

	}
}

module.exports = new PostsRepository();