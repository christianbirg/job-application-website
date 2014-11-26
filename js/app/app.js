"use strict";

define([
  'angular',
  'app/services',
  'app/directives',
  'app/controllers',
  'angularRoute',
  'angularSanitize',
  //'angularXeditable'
], function (angular, services, directives, controllers) {
  return angular.module('application', [
    'ngRoute',
    'ngSanitize',
    //'xeditable',
    'application.services',
    'application.directives',
    'application.controllers'
  ]);

});
