let User = require('../models/user')

exports.signup = function(req, res, next){
	//1 
	let email = req.body.email;
	let password = req.body.password;

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
			
			res.json({success:true});
		});
	})
}