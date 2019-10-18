let express;

module.exports = {
	setExpressInstance(e) { express = e; }
	getExpressInstance( ) { return express; }
};