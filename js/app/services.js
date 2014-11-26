define(['angular'], function (angular) {

  angular.module('application.services', []).factory(
    'DataService', ['$timeout', '$q', '$http', function($timeout, $q, $http) {
      return {
        fetch: function fetch() {
          var deferred = $q.defer();

          $timeout(function() {
            $http.get('assets/application.json').success(function(data) {
              deferred.resolve(data);
            });
          }, 30);

          return deferred.promise;
        }
      }
    }
  ]);
});
