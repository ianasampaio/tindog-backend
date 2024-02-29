const { request, response } = require('express');
const bcrypt = require('bcrypt');
const DogsRepository = require('../repositories/DogsRepository');
const UsersRepository = require('../repositories/UsersRepository');

class DogController {
  async store(request, response) {
    const {
      user_id, name, gender, breed, age, description,
    } = request.body;

    if (!user_id) {
      return response.status(400).json({ error: 'User ID is required' });
    }

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

    const user = await UsersRepository.findById(user_id);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const dog = await DogsRepository.create(
      user_id,
      name,
      gender,
      breed,
      age,
      description,
    );

    response.json(dog);
  }
}

module.exports = new DogController();
