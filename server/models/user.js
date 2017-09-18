const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let Schema = mongoose.Schema;

let userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
})

userSchema.pre('save', function(next) {
	let user = this; 

		bcrypt.genSalt(10, function(err, salt) {
			if(err) { return next(err); }

			bcrypt.hash(user.password, salt, null, function(err, hash){
				if (err) {return next(err); }

				user.password = hash;
				next();
			})
		})
})
let model = mongoose.model('user', userSchema);

module.exports = model;