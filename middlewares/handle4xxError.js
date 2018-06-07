'use strict';

module.exports = () => async function handle4xxError(ctx, next) {
	try {
		await next();
	} catch (err) {
		if (err.status && err.status < 500 && err.status >= 400) {
			ctx.status = err.status;
			ctx.body = {
				meta: {
					code: err.metaCode || err.code || err.status,
					message: err.message,
					details: err.details
				},
				data: {}
			};
			return;
		}
		throw err;
	}
};
