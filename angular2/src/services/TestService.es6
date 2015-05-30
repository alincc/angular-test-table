import {Promise} from 'angular2/angular2';
import {XHR} from 'angular2/src/services/xhr';

export class TestService {
    $http: XHR;
    start: Date;
    end: Date;
    duration;

    constructor(xhr: XHR) {
        this.$http = xhr;
    }

    load(id) {
        return this.$http.get('data/' + id + '.json');
    }

    setStart() {
        console.log('Mark Start');
        this.start = new Date();
        this.end = null;
        this.updateDuration();
    }

    setEnd() {
        console.log('Mark End');
        this.end = new Date();
        this.updateDuration();
    }

    updateDuration() {
        var duration = this.end - this.start;
        if(!duration || duration<0) return -1;
        this.duration = duration;
        console.log(this.duration + "ms");
    }

    getDuration(){
        return this.duration;
    }

}
