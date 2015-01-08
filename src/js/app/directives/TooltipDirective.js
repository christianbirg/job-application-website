"use strict";

app.directive('tooltip', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(function() {
      var jElement = $(element);

      //var text = attrs.tooltipTitle || "undefined";
      //var pos = attrs.tooltipPlacement || "top";

        jElement.tooltip(
        /*{
          title: text,
          placement: pos
        }*/
        );
      });
    }
  }
});
