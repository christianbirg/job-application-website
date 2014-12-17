define(['app'], function(app) {
  app.directive('ratingBar', function() {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.$watch(function() {
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
          $(element).html(ul);
        })
      }
    }
  })
});
