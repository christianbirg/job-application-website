'use strict';

require.config({
	paths: {

	},
	shim: {

	},
	priority: [
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'app',
	'init',
	'routes'
], function(app, init, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
