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
          this.running = false, this.run = function(counter) {
            var $__0 = this;
            var vm = this;
            this.running = true;
            this.records = new Array();
            this.testService.load(counter).then((function(res) {
              console.log('Loading records completed');
              $__0.testService.setStart();
              var data = JSON.parse(res);
              var start = new Date();
              $__0.records = data;
              setTimeout(function() {
                vm.duration = new Date() - start;
              }, 0, true);
              $__0.running = false;
            }), (function(err) {
              console.log(err);
              $__0.running = false;
            }));
          };
          this.testService = ts;
        }
        return ($traceurRuntime.createClass)(TestApp, {getDuration: function() {
            return this.duration;
          }}, {});
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
