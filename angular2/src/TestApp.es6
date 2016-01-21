import {
    ComponentAnnotation as Component,
    ViewAnnotation as View,
    bootstrap
} from 'angular2/angular2';

import {TestTable} from 'TestTable';
import {TestService} from 'services/TestService';

@Component({
    selector: 'test-app',
    appInjector: [TestService]
})
@View({
  templateUrl: 'templates/test-app.html',
  directives: [TestTable]
})
class TestApp {
    running = false;
    testService: TestService;
    duration = 0;

    constructor(ts:TestService) {
        this.testService = ts;
    };

    run(counter){
        var vm = this;

        this.duration = 0;

        // Disable buttons
        this.running = true;

        // clear table
        this.records = new Array();

        // Load data
        this.testService.load(counter).then(
            (res) => {
                console.log('Loading records completed');

                // Parse results
                var data = JSON.parse(res);

                // Start measure
                var start = new Date();

                // Bind
                this.records = data;

                // Measure total
                setTimeout(function(){
                    vm.duration = new Date() - start;
                });

                this.running = false;
            },
            (err) => {
                console.log(err);
                this.running = false;
            });
    };
}

bootstrap(TestApp);
