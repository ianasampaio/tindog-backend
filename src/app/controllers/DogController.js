const { request, response } = require('express');
const DogsRepository = require('../repositories/DogsRepository');
const UsersRepository = require('../repositories/UsersRepository');
const PostsRepository = require('../repositories/PostsRepository');

class DogController {
  async store(request, response) {
		const { userId } = request;
		const user = await UsersRepository.findById(userId);

		if (!user) {
			return response.status(404).json({ error: 'User not found' });
    }

		const {
			name, gender, breed, age, description, picture, state, city
		} = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!gender) {
      return response.status(400).json({ error: 'gender is required' });
    }
    if (!breed) {
      return response.status(400).json({ error: 'Breed is required' });
    }
    if (!age) {
      return response.status(400).json({ error: 'Age is required' });
    }
		if (!state) {
      return response.status(400).json({ error: 'State is required' });
    }
		if (!city) {
      return response.status(400).json({ error: 'City is required' });
    }

    const dog = await DogsRepository.create(
      userId,
      name,
      gender,
      breed,
      age,
      description,
			picture,
			state,
			city
    );

    response.json(dog);
  }

	async show(request, response) {
    const { id } = request.params;
		const dog = await DogsRepository.findById(id);

		if (!dog) {
      return response.status(404).json({ error: 'Dog not found' });
    }

		const posts = await PostsRepository.findByDogId(id);
		//
		dog.posts = posts

		response.json(dog);
	}
}

module.exports = new DogController();
