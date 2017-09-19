let User = require('../models/user');
let jwt = require('jwt-simple');
let config = require('../config');

function createUserToken (user) {
	let timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next){
	//1 
	let email = req.body.email;
	let password = req.body.password;

	if( !email || !password) {
		return res.status(418).send({error: 'you must provide email and pw.'})
	}

	User.findOne({ email: email }, function(err, existingUser) {
		if(err) {
			return next(err);
		}

		if(existingUser){
			// return res.status(418).send(err);
			return res.status(418).send('email is in use')
		}

		let user = new User({
			email: email,
			password: password
		});

		user.save(function(err) {
			if(err) { return next(err); }

			res.json({token: createUserToken(user)});
		});
	})
}

exports.signin = function(req, res, next) {
	res.send({ token: createUserToken(req.user) })
}