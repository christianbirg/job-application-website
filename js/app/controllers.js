'use strict';

define(['angular', 'app/services'], function (angular) {

  return angular.module('application.controllers', ['application.services'])

  .controller('ApplicationController',['$scope', '$rootScope', 'DataService',
    function($scope, $rootScope, DataService){
      $scope.application = DataService.fetch().then(function(data){
        $scope.application = data.application;
        $scope.date = data.date;
        $scope.company = data.company;
        $scope.social = data.social;
        $scope.person = data.person;
      });
    }]
  )

  .controller('CurriculumController', ['$scope', '$rootScope', 'DataService',
    function($scope,  $rootScope, DataService){
      $scope.application = DataService.fetch().then(function(data){
        $scope.curriculum = data.curriculumVitae;
        $scope.social = data.social;
        $scope.person = data.person;
      });
    }]
  )

  .controller('IndexController',['$scope', '$rootScope', 'DataService',
    function($scope, $rootScope, DataService){
      DataService.fetch().then(function(data){
        $scope.application = data.application;
        $scope.index = data.index;
        $scope.company = data.company;
        $scope.social = data.social;
        $scope.person = data.person;
      });
    }]
  )

  .controller('SkillPageController',['$scope', '$rootScope', 'DataService',
    function($scope, $rootScope, DataService){

      $scope.application = DataService.fetch().then(function(data){
        $scope.skills = data.skills;
        $scope.social = data.social;
        $scope.person = data.person;
      });

    }]
  );

});
