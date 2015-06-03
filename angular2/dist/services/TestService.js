System.register("services/TestService", ["angular2/angular2", "angular2/src/services/xhr"], function($__export) {
  "use strict";
  var __moduleName = "services/TestService";
  var Promise,
      XHR,
      TestService;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      XHR = $__m.XHR;
    }],
    execute: function() {
      TestService = function() {
        function TestService(xhr) {
          this.$http = xhr;
        }
        return ($traceurRuntime.createClass)(TestService, {load: function(id) {
            return this.$http.get('../../data/' + id + '.json');
          }}, {});
      }();
      $__export("TestService", TestService);
      Object.defineProperty(TestService, "parameters", {get: function() {
          return [[XHR]];
        }});
    }
  };
});
