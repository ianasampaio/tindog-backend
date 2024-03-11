const { request, response } = require('express');
const bcrypt = require('bcrypt');
const DogsRepository = require('../repositories/DogsRepository');
const UsersRepository = require('../repositories/UsersRepository');

class DogController {
  async store(request, response) {
		const { userId } = request;
		const user = await UsersRepository.findById(userId);

		if (!user) {
			return response.status(404).json({ error: 'User not found' });
    }
		
		const {
			name, gender, breed, age, description, picture
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

    const dog = await DogsRepository.create(
      userId,
      name,
      gender,
      breed,
      age,
      description,
			picture
    );

    response.json(dog);
  }
}

module.exports = new DogController();
