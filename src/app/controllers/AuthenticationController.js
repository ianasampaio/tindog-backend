const { request, response } = require('express');
const UsersRepository = require('../repositories/UsersRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthenticationController {

	async signup(request, response) {
		const {name, email, password, confirm_password, state, city} = request.body;

		if (!name) {
      return response.status(400).json({error: 'Name is required'});
    }
		if (!email) {
      return response.status(400).json({error: 'Email is required'});
    }
		if (!password) {
      return response.status(400).json({error: 'Password is required'});
    }
		if (password !== confirm_password) {
      return response.status(400).json({error: 'Password do not match'});
    }

    const userExists = await UsersRepository.findByEmail(email);
		if (userExists){
      return response.status(400).json({error: 'This e-mail is already in use'});
    }

		const passwordHash = await bcrypt.hash(password, 12);

		const user = await UsersRepository.create(name, email, passwordHash, state, city);
		response.json(user);
	}

	async signin(request, response) {
		const {email, password} = request.body;

		if (!email) {
			return response.status(400).json({error: 'Email is required'});
		}
		if (!password) {
			return response.status(400).json({error: 'Password is required'});
		}

		const user = await UsersRepository.findByEmail(email);
		if (!user){
			return response.status(400).json({error: 'User not found'});
		}

		const checkPassword = await bcrypt.compare(password, user.password);
		if (!checkPassword){
			return response.status(400).json({error: 'Invalid Password'});
		}

		const secret = process.env.SECRET;
		const token = jwt.sign({
			id: user.id,
		}, secret);

		return response.status(200).json({msg: 'Authentication success', token});
	}

}

module.exports = new AuthenticationController();