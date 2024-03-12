const { request, response } = require('express');
const bcrypt = require('bcrypt');
const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await UsersRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
  }

  async store(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return response.status(400).json({ error: 'Email is required' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const UserExists = await UsersRepository.findByEmail(email);

    if (UserExists) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const user = await UsersRepository.create(name, email, password);

    response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, password
    } = request.body;

    const UserExists = await UsersRepository.findById(id);
    if (!UserExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
      return response.status(400).json({ error: 'Email is required' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const UserByEmail = await UsersRepository.findByEmail(email);

    if (UserByEmail && UserByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await UsersRepository.update(id, {
      name, email, passwordHash
    });

    response.json(user);
  }

  delete() {

  }
}

module.exports = new UserController();
