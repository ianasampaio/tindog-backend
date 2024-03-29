const jwt = require('jsonwebtoken');

function authenticate(request, response, next) {
	const {authorization} = request.headers;
	const token = authorization && authorization.split(' ')[1];

	if(!token){
		return response.status(401).json({ error: 'Not authorized' });
	}

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, data) => {
		if(error) return response.status(403).json({ error: 'Not authorized' });
		request.userId = data.id;
		next();
	});

}

module.exports = { authenticate };
