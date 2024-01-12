function authenticate(request, response, next) {
	const {authorization} = request.headers;
	const token = authorization && authorization.split(' ')[1];

	if(!token){
		return response.status(401).json({ error: 'Not authorized' });
	}

	next();
}

module.exports = { authenticate };
