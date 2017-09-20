const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {

	app.get('/', requireAuth, function(req, res){
		res.send({message: 'hey'});
	})
	app.post('/signup', Auth.signup)	

	app.post('/signin', requireSignin, Auth.signin);
}