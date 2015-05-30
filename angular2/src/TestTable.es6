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
    directives: [NgFor, NgIf]
})
export class TestTable {
    startTime: Date;
    endTime: Date;
    testService: TestService;

    constructor(testService: TestService) {
        this.testService = testService;
    };

    setIndex = function(i){
        if(!this.dataset) return;

        if(i == this.dataset.length - 1){
            this.testService.setEnd();
        }
    };
}
