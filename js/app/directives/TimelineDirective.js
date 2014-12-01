define(['app'], function(app) {
  app.directive('timeline', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/_partials/timeline.html'
    };
  });
});
