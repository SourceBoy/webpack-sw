'use strict';

module.exports = {
		entry: {
			sw: './sw.js',
			worker: './worker.js',
		},
		output: {
			filename: '[name].js'
		},
		target: 'webworker', // "web" doesn't work either
		mode: 'production',
		node: false,
		optimization: {
			minimize: false
		}
};
