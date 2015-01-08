"use strict";

app.controller('CurriculumController', ['$injector', '$scope', '$rootScope', 'DataService',
	function($injector, $scope,  $rootScope, DataService){
		DataService.fetch().then(function(data){
			$scope.curriculum = data.curriculumVitae;
			$scope.social = data.social;
			$scope.person = data.person;
		});
	}]
);
