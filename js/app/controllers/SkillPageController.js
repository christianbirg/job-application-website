application.controller('SkillPageController',
  function($scope){

    var dataService = window.ObjectManager.getInstance().getSingleton(DataService);

    $scope.skills = dataService.get('sites', 'skills');
    $scope.social = dataService.get('social');
    $scope.person = dataService.get('person');

  }
);
