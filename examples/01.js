const express = require('express');
const restjs = require('restjs');

let app = express();

let myResource = restjs.Resource({
	read: { customUrlParams: [], cb: (req, res) => {
		res.send({
			greeting: "Hello from the API!"
		});
	}},
	create: { customUrlParams: [], cb: (req, res) => res.send({ error: null })},
	update: { customUrlParams: [], cb: (req, res) => res.send({ error: null })},
	del   : { customUrlParams: [], cb: (req, res) => res.send({ error: null })}
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/res', myResource);
app.listen();