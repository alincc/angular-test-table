System.register("TestTable", ["angular2/angular2", "services/TestService"], function($__export) {
  "use strict";
  var __moduleName = "TestTable";
  var Component,
      View,
      NgFor,
      NgIf,
      TestService,
      TestTable;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentAnnotation;
      View = $__m.ViewAnnotation;
      NgFor = $__m.NgFor;
      NgIf = $__m.NgIf;
    }, function($__m) {
      TestService = $__m.TestService;
    }],
    execute: function() {
      TestTable = (function() {
        function TestTable(testService) {
          this.setIndex = function(i) {
            if (!this.dataset)
              return ;
            if (i == this.dataset.length - 1) {
              this.testService.setEnd();
            }
          };
          this.testService = testService;
        }
        return ($traceurRuntime.createClass)(TestTable, {}, {});
      }());
      $__export("TestTable", TestTable);
      Object.defineProperty(TestTable, "annotations", {get: function() {
          return [new Component({
            selector: 'test-table',
            properties: {'dataset': 'dataset'},
            services: [TestService]
          }), new View({
            templateUrl: 'templates/test-table.html',
            directives: [NgFor, NgIf]
          })];
        }});
      Object.defineProperty(TestTable, "parameters", {get: function() {
          return [[TestService]];
        }});
    }
  };
});
