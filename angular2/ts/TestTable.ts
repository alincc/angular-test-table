/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: 'test-table'
})
@View({
    templateUrl: './templates/test-table.html',
    directives: [NgFor]
})
export class TestTable {
    constructor() {
    }
}
