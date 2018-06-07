'use strict';

const HttpStatus = require('http-status-codes');

module.exports = () => async (ctx, next) => {
	await next();

	if (!ctx.body) {
		return;
	}

	if (!ctx.body.meta) {
		ctx.body = {
			meta: {
				code: HttpStatus.getStatusText(ctx.status),
				message: ctx.message || HttpStatus.getStatusText(ctx.status) || ''
			},
			data: ctx.body
		};
	}
};
