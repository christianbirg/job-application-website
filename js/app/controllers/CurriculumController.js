application.controller('CurriculumController',
  function($scope){

    var dataService = window.ObjectManager.getInstance().getSingleton(DataService);

    $scope.curriculum = dataService.get('sites', 'curriculumVitae');
    $scope.social = dataService.get('social');
    $scope.person = dataService.get('person');

  }
);
