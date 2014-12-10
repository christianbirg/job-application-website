'use strict';

define([
  'angular',
  'jquery',
  'app',
  'services/DataService',
  'directives/RatingBarDirective',
  'directives/TimelineDirective',
  'directives/TooltipDirective',
  'controllers/IndexController',
  'controllers/CurriculumController',
  'controllers/ApplicationController',
  'controllers/SkillPageController',
], function(angular, $, app) {

  return app.run(function($rootScope, editableOptions, editableThemes) {
    editableOptions.theme = 'bs3';
    editableThemes.bs3.inputClass = 'form-control';
    $rootScope.editmode = false;
    $rootScope.switchMode = function() {
      $('#loading-overlay').fadeIn();
      if($rootScope.editmode === false) {
        $('body').removeClass('editmode-enabled')
      } else {
        $('body').addClass('editmode-enabled')
      }
      $('#loading-overlay').fadeOut();
    }
  });
});
