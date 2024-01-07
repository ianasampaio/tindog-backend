const { request, response } = require('express');
const UsersRepository = require('../repositories/UsersRepository');


class UserController {

  async index(request, response) {
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new UserController();