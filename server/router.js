const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');
let requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app) {

	app.get('/', requireAuth, function(req, res){
		res.send('hello homepage');
	})
	app.post('/signup', Auth.signup)	
}