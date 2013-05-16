var registration = require('registration')

var routes = {};

routes.ui = function(app) {
	app.get("/", registration.get);
};

module.exports = routes;