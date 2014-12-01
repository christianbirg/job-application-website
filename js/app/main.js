'use strict';

require.config({
	paths: {
		jquery: '../../libs/jquery/dist/jquery.min',
		bootstrap: '../../libs/bootstrap-sass-official/assets/javascripts/bootstrap',
		angular: '../../libs/angular/angular',
		angularRoute: '../../libs/angular-route/angular-route.min',
		angularSanitize: '../../libs/angular-sanitize/angular-sanitize.min',
		angularXeditable: '../../libs/angular-xeditable/dist/js/xeditable.min',
		text: '../../libs/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'jquery' : {'exports' : '$'},
		'bootstrap': ['jquery'],
		'angularRoute': ['angular'],
		'angularSanitize': ['angular'],
		'angularXeditable': ['angular'],

	},
	priority: [
		"angular", "jquery"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'init',
	'routes'
], function(angular, app, init, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
