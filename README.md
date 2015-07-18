angular-test-table
------------------
Test Angular 1.x, Angular 2.0.0-alpha.26, ReactJS or HTML DOM rendering performance for displaying a &lt;table/> with large dataset (500, 1500, 2500, 5000 records x 14 columns).
This is not supposed to exist in real applications, and we think having large amount of data displayed to user should be avoided as much as possible.

Notice that in the browser, the duration may be calculated before the table renders. For real test results it's better to use protractor with benchpress.

Usage
-----
Give it a try in the browser [here](https://rawgit.com/alincc/angular-test-table/master/angular1/index.html)

or

For real performance tests clone the repository and run protractor.
```
git clone https://github.com/alincc/angular-test-table.git
cd angular-test-table
npm update
protractor
```

### Running the benchmarks

1. `$(npm bin)/webdriver-manager install`
2. `$(npm bin)/protractor protractor.conf.js`

#### Generate larger file

To generate data, you can use generator/data-gen.js with parameter representing the number of records to be generated.
```
node data-gen.js 500
```
The above command will create a file /data/500.json.
The content is a JSON array with 14 fields.

Tests
-----
- AngularJS v1.2.20
- AngularJS v1.3.9
- AngularJS v1.4.0
- Angular v2.0.0-alpha.26
- ReactJS 0.13.0
- InfernoJS 0.1.1
- HTML DOM

TODO
----
- Aurelia

![](https://github.com/alincc/angular-test-table/blob/master/img/sample.png)


**License:** [MIT License](https://raw.github.com/finom/matreshka/master/LICENSE)
