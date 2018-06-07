'use strict';

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

exports.config = {
	/**
	 * Array of application names.
	 */
	app_name: ['newrelic_path_problem'],

	/**
	 * Your New Relic license key.
	 */
	license_key: '99d2b5c9a36608a53ddba61a0d1370bd691db00c',

	logging: {
		/**
		 * Level at which to log. 'trace' is most useful to New Relic when diagnosing
		 * issues with the agent, 'info' and higher will impose the least overhead on
		 * production applications.
		 */
		level: 'info',
		// level: 'trace',
		filepath: 'stdout'
	}
};
