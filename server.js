'use strict';

require('newrelic');
const http = require('http');

Promise.resolve()
	.then(() => require('./app')())
	.then((app) => {
	const server = http.createServer(app.callback());
	server.keepAliveTimeout = 120 * 1000;
	server.listen(10001);
	console.log('[SERVER] started at host:' + 10001);
});
