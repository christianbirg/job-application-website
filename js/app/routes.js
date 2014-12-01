'use strict';

define(['angular', 'app', 'controllers/IndexController', 'controllers/CurriculumController', 'controllers/ApplicationController', 'controllers/SkillPageController'], function(angular, app) {

	return app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'IndexController'
		})
		.when('/cover-letter', {
			templateUrl: 'views/cover-letter.html',
			controller: 'ApplicationController'
		})
		.when('/curriculum-vitae', {
			templateUrl: 'views/curriculum-vitae.html',
			controller: 'CurriculumController'
		})
		.when('/skill-page', {
			templateUrl: 'views/skill-page.html',
			controller: 'SkillPageController'
		})
		.otherwise('/');

		//$locationProvider.html5Mode(true);

	}])

});
