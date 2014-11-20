application.controller('IndexController',
  function($scope){

    var dataService = window.ObjectManager.getInstance().getSingleton(DataService);

    $scope.index = dataService.get('sites', 'index');
    $scope.social = dataService.get('social');
    $scope.person = dataService.get('person');

  }
);
