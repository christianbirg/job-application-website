"use strict";

app.controller('IndexController',['$injector', '$scope', '$rootScope', 'DataService',
	function($injector, $scope, $rootScope, DataService){
		DataService.fetch().then(function(data){
			$scope.application = data.application;
			$scope.index = data.index;
			$scope.company = data.company;
			$scope.social = data.social;
			$scope.person = data.person;
		}); 
	}]
);
