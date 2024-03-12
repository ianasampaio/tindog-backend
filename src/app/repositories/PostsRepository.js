const db = require("../../database");

class PostsRepository {
	async findAll() {
		const rows = await db.query(`
    	SELECT * FROM posts
    `);
		return rows;
	}

	async findByDogId(dogId) {
		const rows = await db.query(
			`
			SELECT * FROM posts
			WHERE dog_id = $1
			ORDER BY created_at DESC
			LIMIT 50
		`,
			[dogId]
		);
		return rows;
	}

	async create(
		userId,
		city,
		state,
		dogId,
		dogName,
		dogGender,
		dogBreed,
		dogPicture,
		content,
		image,
		createdAt,
		updatedAt
	) {
		const [row] = await db.query(
			`
			INSERT INTO posts(user_id, city, state, dog_id, dog_name, dog_gender, dog_breed, dog_picture, content, image, created_at, updated_at)
			VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
			RETURNING *
		`,
			[
				userId,
				city,
				state,
				dogId,
				dogName,
				dogGender,
				dogBreed,
				dogPicture,
				content,
				image,
				createdAt,
				updatedAt,
			]
		);
		return row;
	}

	update() {}

	delete() {}
}

module.exports = new PostsRepository();
