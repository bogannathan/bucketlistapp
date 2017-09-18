let Auth = require('./controllers/auth');
let User = require('./models/user');


module.exports = function(app) {
	app.post('/signup', Auth.signup)	
}