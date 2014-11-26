application.controller('SkillPageController',['$scope', '$rootScope', 'DataService',
  function($scope, $rootScope, DataService){

    $scope.application = DataService.fetch().then(function(data){
      $scope.skills = data.skills;
      $scope.social = data.social;
      $scope.person = data.person;
    });

  }]
);
