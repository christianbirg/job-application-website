'use strict';

define(['app/services'], function(services) {

  angular.module('application.directives', ['myApp.services'])

  .directive('ratingbar', function() {
    return function (scope, element, attrs) {
      var rangeValue = +attrs.range;
      var maxRange = 5;

      var ul = document.createElement('ul');
      ul.className = "com-ratingbar";
      for(var i = 0; i < maxRange; i++) {

        var li = document.createElement('li');
        li.html = i;
        if(i == (rangeValue - 0.5)) {
          li.className="half";
        } else if(i < rangeValue) {
          li.className="filled";
        } else {
          li.className="empty"
        }

        ul.appendChild(li);
      }

      element.html(ul);
    };
  })

  .directive('timeline', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/_partials/timeline.html'
    };
  });

});
