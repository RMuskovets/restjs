const Router = require('express').Router;

function setFn(m, r, u, cb) {
	let routerFn;

	switch (m) {
		case 'r': routerFn = r.get; break;
		case 'c': routerFn = r.post; break;
		case 'u': routerFn = r.update; break;
		case 'd': routerFn = r.delete; break;
	}

	routerFn(u.reduce((p,x) => `${p}/:${x}`, ''), cb);
}

module.exports = {
	Resource(fns) {
		const r = Router();
		const { create, read, update, del } = fns;
		setFn('r', r, [...read.customUrlParams        ], read.cb);
		setFn('r', r, [...read.customUrlParams, 'id'  ], read.cb);

		setFn('c', r, [...create.customUrlParams      ], create.cb);
		setFn('c', r, [...create.customUrlParams, 'id'], create.cb);

		setFn('u', r, [...update.customUrlParams, 'id'], update.cb);

		setFn('d', r, [...del.customUrlParams, 'id'   ], del.cb);
	}
}