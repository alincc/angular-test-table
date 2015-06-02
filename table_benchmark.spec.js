var benchpress = require('benchpress');
var runner = new benchpress.Runner([
  //use protractor as Webdriver client
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  //use RegressionSlopeValidator to validate samples
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  //use 10 samples to calculate slope regression
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(10),
  //use the script metric to calculate slope regression
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

var pages = [
  {
    name: 'ng1.2.20',
    url: 'http://localhost:8080/angular1/index.html',
  },
  {
    name: 'ng1.3.9',
    url: 'http://localhost:8080/angular1/index2.html',
  },
  {
    name: 'ng1.4.0',
    url: 'http://localhost:8080/angular1/index3.html',
  },
  {
    name: 'ng2.0.0-alpha.26',
    url: 'http://localhost:8080/angular2/dist/index.html',
    ignoreSynchronization: true,
  },
  {
    name: 'React0.13.0',
    url: 'http://localhost:8080/reactjs/index.html',
  },
];

var buttons = [
  {
    name: '500 records',
    selector: 'a[role="button"].btn-success:nth-child(1)',
  },
  {
    name: '1500 records',
    selector: 'a[role="button"].btn-success:nth-child(2)',
  },
  {
    name: '2500 records',
    selector: 'a[role="button"].btn-success:nth-child(3)',
  },
  {
    name: '5000 records',
    selector: 'a[role="button"].btn-success:nth-child(4)',
  },
];


describe('angularjs', function() {

  pages.forEach(function(page) {
    buttons.forEach(function(button) {
      it('should log ' + page.name + ' stats for ' + button.name, function(done) {
        browser.ignoreSynchronization = true;
        runner.sample({
          id: page.name + '-' + button.name + '-table',
          prepare: function() {
            browser.get(page.url);
            // wait for the page to be loaded
            browser.sleep(1000);
          },
          execute: function() {
            $(button.selector).click();
            // wait at least until the table has been destroyed and recreated.
            // Note that this wait time won't show up in the benchmark results,
            // as benchpress reads out the dev tools data.
            browser.sleep(3000);
          }
        }).then(done, done.fail);
      });
    });
  });
});
