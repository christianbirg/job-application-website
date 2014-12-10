'use strict';

require.config({
	paths: {
		jquery: '../../libs/jquery/dist/jquery.min',
		//ui: '../../libs/jquery-ui/jquery-ui.min',
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
		//'ui': ['jquery'],
		'bootstrap': ['jquery'],
		'angularRoute': ['angular'],
		'angularSanitize': ['angular'],
		'angularXeditable': ['angular'],

	},
	priority: [
		"angular", "jquery", "bootstrap"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'init',
	'routes',
	'bootstrap'
], function(angular, app, init, routes, bootstrap) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
