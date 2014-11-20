application.controller('ApplicationController',
  function($scope){

    var dataService = window.ObjectManager.getInstance().getSingleton(DataService);

    $scope.application = dataService.get('sites', 'application');
    $scope.company = dataService.get('company');
    $scope.social = dataService.get('social');
    $scope.date = dataService.get('date');
    $scope.person = dataService.get('person');

  }
);
