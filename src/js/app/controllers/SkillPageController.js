"use strict";

app.controller('SkillPageController',['$injector', '$scope', '$rootScope', 'DataService',
	function($injector, $scope, $rootScope, DataService){
		DataService.fetch().then(function(data){
			$scope.skills = data.skills;
			$scope.social = data.social;
			$scope.person = data.person;
		});
	}]
);
