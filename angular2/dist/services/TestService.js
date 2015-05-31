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
      TestService = (function() {
        function TestService(xhr) {
          this.$http = xhr;
        }
        return ($traceurRuntime.createClass)(TestService, {
          load: function(id) {
            return this.$http.get('../../data/' + id + '.json');
          },
          setStart: function() {
            console.log('Mark Start');
            this.start = new Date();
            this.end = null;
            this.updateDuration();
          },
          setEnd: function() {
            console.log('Mark End');
            this.end = new Date();
            this.updateDuration();
          },
          updateDuration: function() {
            var duration = this.end - this.start;
            if (!duration || duration < 0)
              return -1;
            this.duration = duration;
            console.log(this.duration + "ms");
          },
          getDuration: function() {
            return this.duration;
          }
        }, {});
      }());
      $__export("TestService", TestService);
      Object.defineProperty(TestService, "parameters", {get: function() {
          return [[XHR]];
        }});
    }
  };
});
