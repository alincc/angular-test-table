# angular-test-table
Test Angular ng-repeat rendering speed of a &lt;table/> with large dataset

### Usage
You can [test online](https://rawgit.com/alincc/angular-test-table/master/index.html)

or

Clone the repository on your local machine. You need node.js
```
git clone https://github.com/alincc/angular-test-table.git
cd angular-test-table
npm update
run.cmd
```

#### Generate larger file

To generate data, you can use data-gen.js with parameter representing the number of records to be generated.
```
node data-gen.js 500
```
The above command will create a file /data/500.json.
The content is a JSON array with 14 fields.
The 5000 generated dataset has a size of 2.14 MB.

### Versions of AngularJS
- AngularJS v1.2.20
- AngularJS v1.3.9
- AngularJS v1.4.0
- Angular v2.0.0-alpha25

                |   500   |  5000
--------------- | ------- | -------
Angular v1.2.20 | ~550 ms | ~4000ms
Angular v1.3.9  | ~400 ms | ~3000ms
Angular v1.4.0  | ~550 ms | ~3000ms
Angular v2.0.0-a| ~67 ms  | ~5000ms

Note: Angular v2 sample does not include any filters. All times are averages obtained on my laptop.

TODO
- Aurelia
- ReactJS


![](https://github.com/alincc/angular-test-table/blob/master/img/sample.png)

**License:** [MIT License](https://raw.github.com/finom/matreshka/master/LICENSE)