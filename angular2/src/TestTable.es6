import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor, NgIf} from 'angular2/angular2';
import {TestService} from 'services/TestService';

@Component({
    selector: 'test-table',
    properties: {
        'dataset':'dataset'
    },
    services: [TestService]
})
@View({
    templateUrl: 'templates/test-table.html',
    directives: [NgFor]
})
export class TestTable {
    testService: TestService;

    constructor(testService: TestService) {
        this.testService = testService;
    };
}
