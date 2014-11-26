"use strict";

require.config({
  paths: {
    'angular': '../../bower_components/angular/angular',
    'jquery': '../../bower_components/jquery/dist/jquery.min',
    'angularRoute': '../../bower_components/angular-route/angular-route',
    'angularSanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    //'angularXeditable': '../../bower_components/x-editable/dist/bootstrap-editable/js/bootstrap-editable',
    'text': '../../bower_components/requirejs-text/text'
  },
  'shim': {
    'angular' : {'exports' : 'angular'},
    'jquery' : {'exports' : '$'},
    'angularRoute': ['angular'],
    'angularSanitize': ['angular'],
    //'angularXeditable': ['angular', 'jquery']

  },
  'priority': ['angular']
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'angular',
  'app/app',
  'app/routes'
], function(angular, app, routes) {
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });
});
