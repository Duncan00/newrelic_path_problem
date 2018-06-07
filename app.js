'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const decorateBody = require('./middlewares/decorateBody');
const handle404Error = require('./middlewares/handle404Error');

module.exports = function makeApp() {
	const app = new Koa();
	const insecure = new Router();
	const secure = new Router();
	const internal = new Router();

	insecure
		.get('/insecure', async (ctx) => {
			ctx.body = {
				insecure: 'insecure'
			};
		});

	secure
		.get('/secure', async (ctx) => {
			ctx.body = {
				insecure: 'secure'
			};
		});

	internal
		.get('/internal', async (ctx) => {
			ctx.body = {
				insecure: 'internal'
			};
		});

	return app
		.use(decorateBody())

		.use(insecure.routes())
		.use(insecure.allowedMethods())
		.use(internal.routes())
		.use(internal.allowedMethods())
		.use(secure.routes())
		.use(secure.allowedMethods())

		.use(handle404Error());
};
