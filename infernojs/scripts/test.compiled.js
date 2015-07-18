"use strict";


t7.module(function(t7) {

  class TestTable extends Inferno.Component {
    render() {
        var rows = [];
        if (this.props.rows) {
          this.props.rows.forEach(function (row) {
            rows.push(
              t7.precompile({template: __XvYdX,templateKey: 1297586528, components: null, values: [row.status, row.name, row.email, row.field1, row.field2, row.field3, row.field4, row.field5, row.field6Data, row.field7, row.field8, row.field9, row.field10]})
            );
          });
        }
        return t7.precompile({template: __T2OCZ,templateKey: 1229343019, components: null, values: [rows]});
    }
  }

  t7.assign("TestTable", TestTable);

  class Header extends Inferno.Component {
    handleClick(counter) {
        this.props.runTest(counter);
    }
    render() {
        return t7.precompile({template: __z7Vcj,templateKey: -2028456066, components: null, values: [this.props.running, this.handleClick.bind(this, 500), this.props.running, this.handleClick.bind(this, 1500), this.props.running, this.handleClick.bind(this, 2500), this.props.running, this.handleClick.bind(this, 5000), this.props.duration || ""]});
    }
  }

  t7.assign("Header", Header);

  class TestApp extends Inferno.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      this.runTest = this.runTest.bind(this);
    }
    runTest(counter) {
      this.setState({rows: [], running: true});
	      // Force clear table before
      Inferno.render(
        t7.precompile({template: __Qoccd,templateKey: 312192015, components: null, values: [[]]}),
        document.getElementById("table")
      );

      $.ajax({
          url: '../data/' + counter + '.json',
          dataType: 'json',
          cache: true,
          success: function (data) {
              console.log('Loading records completed');

              var start = new Date();
              this.setState({rows: data, running: false});
              Inferno.render(
                t7.precompile({template: __Qoccd,templateKey: 312192015, components: null, values: [this.state.rows]}),
                document.getElementById("table")
              );
              this.setState({duration: new Date() - start});
          }.bind(this),
          error: function (xhr, status, err) {
              console.error('Error', status, err.toString());
          }.bind(this)
      });
    }
    render() {
      return t7.precompile({template: __QAIXw,templateKey: 1392273188, components: null, values: [this.runTest, this.state.running, this.state.duration]});
    }
  }

  t7.assign("TestApp", TestApp);

  Inferno.render(
    t7.precompile({template: __6TbUR,templateKey: -1535803172, components: null, values: []}),
    document.getElementById('content')
  );

});

//t7 precompiled templates

;function __Qoccd(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {component:__$components__.TestTable, props: {'rows':__$props__[0]}, propsValueKeys: {'rows':0}}};
;function __T2OCZ(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {tag: 'table',attrs: [{name:'class',value:'table'}],children: [{tag: 'thead',attrs: [],children: [{tag: 'tr',attrs: [],children: [{tag: 'th',attrs: [],children: [{tag: 'input',attrs: [{name:'type',value:'checkbox'}],children: []}]},{tag: 'th',attrs: [],children: 'Status'},{tag: 'th',attrs: [],children: 'Name'},{tag: 'th',attrs: [],children: 'Email'},{tag: 'th',attrs: [],children: 'field1'},{tag: 'th',attrs: [],children: 'field2'},{tag: 'th',attrs: [],children: 'field3'},{tag: 'th',attrs: [],children: 'field4'},{tag: 'th',attrs: [],children: 'field5'},{tag: 'th',attrs: [],children: 'field6Date'},{tag: 'th',attrs: [],children: 'field7'},{tag: 'th',attrs: [],children: 'field8'},{tag: 'th',attrs: [],children: 'field9'},{tag: 'th',attrs: [],children: 'field10'}]}]},{tag: 'tbody',attrs: [],children: Inferno.createValueNode(__$props__[0],0)}]}};
;function __XvYdX(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {tag: 'tr',attrs: [],children: [{tag: 'td',attrs: [],children: [{tag: 'input',attrs: [{name:'type',value:'checkbox'}],children: []}]},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[0],0)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[1],1)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[2],2)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[3],3)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[4],4)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[5],5)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[6],6)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[7],7)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[8],8)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[9],9)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[10],10)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[11],11)},{tag: 'td',attrs: [],children: Inferno.createValueNode(__$props__[12],12)}]}};
;function __QAIXw(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {tag: 'div',attrs: [],children: [{component:__$components__.Header, props: {'runTest':__$props__[0],'running':__$props__[1],'duration':__$props__[2]}, propsValueKeys: {'runTest':0,'running':1,'duration':2}},{tag: 'div',attrs: [{name:'id',value:'table'}],children: []}]}};
;function __z7Vcj(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {tag: 'div',attrs: [],children: [{tag: 'p',attrs: [],children: [{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../angular1/index.html'}],children: 'AngularJS v1.2.20'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../angular1/index2.html'}],children: 'AngularJS v1.3.9'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../angular1/index3.html'}],children: 'AngularJS v1.4.0'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../angular2/dist/index.html'}],children: 'AngularJS v2.0.0-alpha.26'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../reactjs/index.html'}],children: 'ReactJs 0.13.0'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link selected'},{name:'role',value:'button'}],children: 'InfernoJS 0.1.1'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-link'},{name:'role',value:'button'},{name:'href',value:'../raw/index.html'}],children: 'HTML DOM'}]},{tag: 'p',attrs: [],children: [{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-success'},{name:'role',value:'button'},{name:'disabled',value:Inferno.createValueNode(__$props__[0],0)},{name:'onClick',value:Inferno.createValueNode(__$props__[1],1)}],children: '500 records'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-success'},{name:'role',value:'button'},{name:'disabled',value:Inferno.createValueNode(__$props__[2],2)},{name:'onClick',value:Inferno.createValueNode(__$props__[3],3)}],children: '1500 records'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-success'},{name:'role',value:'button'},{name:'disabled',value:Inferno.createValueNode(__$props__[4],4)},{name:'onClick',value:Inferno.createValueNode(__$props__[5],5)}],children: '2500 records'},{tag: 'a',attrs: [{name:'class',value:'btn btn-lg btn-success'},{name:'role',value:'button'},{name:'disabled',value:Inferno.createValueNode(__$props__[6],6)},{name:'onClick',value:Inferno.createValueNode(__$props__[7],7)}],children: '5000 records'}]},{tag: 'div',attrs: [{name:'class',value:'well well-sm'}],children: [{tag: 'span',attrs: [{name:'class',value:'text-muted'}],children: 'Duration to render'},Inferno.createValueNode(__$props__[8],8),' ms                ']}]}};
;function __6TbUR(){"use strict";var __$props__ = arguments[0];var __$components__ = arguments[1];return {component:__$components__.TestApp, props: {}, propsValueKeys: {}}};
