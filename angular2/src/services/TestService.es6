import {Promise} from 'angular2/angular2';
import {XHR} from 'angular2/src/services/xhr';

export class TestService {
    $http: XHR;
    start: Date;
    end: Date;

    constructor(xhr: XHR) {
        this.$http = xhr;
    }

    load(id) {
        return this.$http.get('../../data/' + id + '.json');
    }

}
