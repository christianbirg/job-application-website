(function() {

  DataService = function DataService() {

  };

  DataService.prototype.init = function init() {
      this.dataSource = window.data;
  };

  DataService.prototype.get = function get(block, site) {
    var site = site || false;
    var dataSource = this.dataSource;
    for (var key in dataSource) {
      if(dataSource.hasOwnProperty(key) && key === block) {
        var obj = dataSource[key];

        if(site === false) {
          return dataSource[key];
        }

        for (var prop in obj) {
          if(obj.hasOwnProperty(prop) && prop === site){
            return obj[prop];
          }
        }
      }
    }

    return [];

  }

})();
