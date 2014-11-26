application.controller('ApplicationController',['$scope', '$rootScope', 'DataService',
  function($scope, $rootScope, DataService){
    $scope.application = DataService.fetch().then(function(data){
      $scope.application = data.application;
      $scope.date = data.date;
      $scope.company = data.company;
      $scope.social = data.social;
      $scope.person = data.person;
    });
  }]
);
