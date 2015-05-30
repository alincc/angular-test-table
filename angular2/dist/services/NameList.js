System.register("services/NameList", [], function($__export) {
  "use strict";
  var __moduleName = "services/NameList";
  var NamesList;
  return {
    setters: [],
    execute: function() {
      NamesList = (function() {
        function NamesList() {
          this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
        }
        return ($traceurRuntime.createClass)(NamesList, {get: function() {
            return this.names;
          }}, {});
      }());
      $__export("NamesList", NamesList);
    }
  };
});
