application.controller('CurriculumController', ['$scope', '$rootScope', 'DataService',
  function($scope,  $rootScope, DataService){
    $scope.application = DataService.fetch().then(function(data){
      $scope.curriculum = data.curriculumVitae;
      $scope.social = data.social;
      $scope.person = data.person;
    });
  }]
);
