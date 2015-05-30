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
    duration: int = 0;

    constructor(ts:TestService) {
        this.testService = ts;
    };

    run=function(counter){
        this.running = true;
        this.records = new Array();

        this.testService.load(counter).then(
            (res) => {
                console.log('Loading records completed');

                // Mark as started (before JSON parse)
                this.testService.setStart();

                // Set records
                this.records = JSON.parse(res);

                this.running = false;
            },
            (err) => {
                console.log(err);
                this.running = false;
            });
    };
}

bootstrap(TestApp);