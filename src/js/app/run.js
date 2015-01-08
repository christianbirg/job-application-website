'use strict';

app.run(['$rootScope', 'editableOptions', 'editableThemes', function($rootScope, editableOptions, editableThemes) {
  editableOptions.theme = 'bs3';
  editableThemes.bs3.inputClass = 'form-control';
  $rootScope.editmode = false;

  $rootScope.switchMode = function() {
    $('#loading-overlay').fadeIn(500);
    setTimeout(function() {
      if($rootScope.editmode === false) {
        $('body').removeClass('editmode-enabled')
      } else {
        $('body').addClass('editmode-enabled')
      }
      $('#loading-overlay').fadeOut();
    }, 1000);
  }
}]);
