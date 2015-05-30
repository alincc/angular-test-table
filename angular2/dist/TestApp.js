System.register("TestApp", ["angular2/angular2", "TestTable", "services/TestService"], function($__export) {
  "use strict";
  var __moduleName = "TestApp";
  var Component,
      View,
      bootstrap,
      TestTable,
      TestService,
      TestApp;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentAnnotation;
      View = $__m.ViewAnnotation;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      TestTable = $__m.TestTable;
    }, function($__m) {
      TestService = $__m.TestService;
    }],
    execute: function() {
      TestApp = (function() {
        function TestApp(ts) {
          this.running = false, this.duration = 0, this.run = function(counter) {
            var $__0 = this;
            this.running = true;
            this.records = new Array();
            this.testService.load(counter).then((function(res) {
              console.log('Loading records completed');
              $__0.testService.setStart();
              $__0.records = JSON.parse(res);
              $__0.running = false;
            }), (function(err) {
              console.log(err);
              $__0.running = false;
            }));
          };
          this.testService = ts;
        }
        return ($traceurRuntime.createClass)(TestApp, {}, {});
      }());
      Object.defineProperty(TestApp, "annotations", {get: function() {
          return [new Component({
            selector: 'test-app',
            appInjector: [TestService]
          }), new View({
            templateUrl: 'templates/test-app.html',
            directives: [TestTable]
          })];
        }});
      Object.defineProperty(TestApp, "parameters", {get: function() {
          return [[TestService]];
        }});
      bootstrap(TestApp);
    }
  };
});
