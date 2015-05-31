# angular-test-table
Test Angular 1.x, Angular 2.0 alpha25 and ReactJS rendering performance of a &lt;table/> with large dataset

### Usage

Direct [test online](https://rawgit.com/alincc/angular-test-table/master/angular1/index.html)

or

Clone the repository on your local machine. You need node.js
```
git clone https://github.com/alincc/angular-test-table.git
cd angular-test-table
npm update
run.cmd
```

#### Generate larger file

To generate data, you can use generator/data-gen.js with parameter representing the number of records to be generated.
```
node data-gen.js 500
```
The above command will create a file /data/500.json.
The content is a JSON array with 14 fields.

### Versions of AngularJS
- AngularJS v1.2.20
- AngularJS v1.3.9
- AngularJS v1.4.0
- Angular v2.0.0-alpha25
- ReactJS 0.13.0

TODO
- Aurelia


![](https://github.com/alincc/angular-test-table/blob/master/img/sample.png)

**License:** [MIT License](https://raw.github.com/finom/matreshka/master/LICENSE)