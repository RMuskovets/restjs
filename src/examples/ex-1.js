const restjs = require('restjs');


let api = { objs: {}, settings: {} };

class Greeting extends Entity {
	constructor({ name, greet }) {
		super();
		this.greet = `${greet} ${name}!`;
	}

	isShown(field) {
		return true;
	}

	/*
	onRequest(req, res) {
		res.send(`{ "greeting": "${this.greeting}" }`);
	}
	*/
}

api.objs.Greeting = Greeting;

api.settings['dataConvertion'] = 'json';

restjs.registerAPI(api);
restjs.serve({ port: 8080 });