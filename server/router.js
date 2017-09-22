const Auth = require('./controllers/auth');
const BucketList = require('./controllers/bucketlistcontroller');

const passportService = require('./services/passport');
const passport = require('passport');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {

	app.post('/newItem', requireAuth, BucketList.addBucketList);
	app.post('/signup', Auth.signup)	
	app.post('/signin', requireSignin, Auth.signin);
	app.get('/items', requireAuth, BucketList.fetchBucketLists)
}