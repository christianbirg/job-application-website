"use strict";

define(['angular', 'app/app'], function(angular, app) {

  return app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'IndexController'
    })
    .when('/cover-letter', {
      templateUrl: 'views/cover-letter.html',
      controller: 'ApplicationController'
    })
    .when('/curriculum-vitae', {
      templateUrl: 'views/curriculum-vitae.html',
      controller: 'CurriculumController'
    })
    .when('/skill-page', {
      templateUrl: 'views/skill-page.html',
      controller: 'SkillPageController'
    })
    .when('/config', {
      templateUrl: 'views/config.html',
      controller: 'ConfigController'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);

  }])

  /*.run(function($rootScope) {
    //editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    //editableThemes.bs3.inputClass = 'form-control';
    $rootScope.editmode = false;

    $rootScope.switchMode = function() {
      $('#loading-overlay').fadeIn();
      window.setTimeout(function() {
        if($rootScope.editmode === false) {
          $('body').removeClass('editmode-enabled');
        } else {
          $('body').addClass('editmode-enabled');
        }
        $('#loading-overlay').fadeOut();
      }, 1200);
    }
  });*/

});
