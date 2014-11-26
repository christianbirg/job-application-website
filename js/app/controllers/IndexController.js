application.controller('IndexController',['$scope', '$rootScope', 'DataService',
  function($scope, $rootScope, DataService){
    DataService.fetch().then(function(data){
      $scope.application = data.application;
      $scope.index = data.index;
      $scope.company = data.company;
      $scope.social = data.social;
      $scope.person = data.person;
    });
  }]
);
