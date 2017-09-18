module.exports = function(app) {
	
	app.get('/', function(req, res, next) {
		res.send('hello homepage')
	})

	app.get('/signup', function(req, res, next) {
		res.send('thanks for signing up!')
	})
}