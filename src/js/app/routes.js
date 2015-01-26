'use strict';

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/index.html',
		controller: 'IndexController'
	})
	.when('/application', {
		templateUrl: 'views/application.html',
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

	$locationProvider.html5Mode(true).hashPrefix('!');

}]);
