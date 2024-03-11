const UsersRepository = require("../repositories/UsersRepository");
const PostsRepository = require("../repositories/PostsRepository");
const DogsRepository = require("../repositories/DogsRepository");

class PostController {
	async index(request, response) {
		const posts = await PostsRepository.findAll();
		response.json(posts);
	}

	async store(request, response) {
		const { content, image } = request.body;

		if (!content && !image) {
			return response.status(400).json({ error: "The fields are empty" });
		}

		const { userId } = request;
		const user = await UsersRepository.findById(userId);

		if (!user) {
			return response.status(404).json({ error: "User not found" });
		}

		const { city: city, state: state } = user;

		const dog = await DogsRepository.findByUserId(user.id);

		if (!dog) {
			return response.status(404).json({ error: "Dog not found" });
		}

		const { id: dogId, name: dogName, gender: dogGender, breed: dogBreed, picture: dogPicture } = dog;

		const date = new Date().toISOString();
		const created_at = date;
		const updated_at = date;

		const post = await PostsRepository.create(
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
			created_at,
			updated_at
		);
		response.json(post);
	}
}

module.exports = new PostController();
