"use strict";


t7.module(function(t7) {

  class TestTable extends Inferno.Component {
    render() {
        var rows = [];
        if (this.props.rows) {
          this.props.rows.forEach(function (row) {
            rows.push(
              ({dom: null, key: null, template: __1297586528, templateValues: [row.status, row.name, row.email, row.field1, row.field2, row.field3, row.field4, row.field5, row.field6Data, row.field7, row.field8, row.field9, row.field10], templateElements: Array(13), templateTypes: Array(13), t7ref: t7})
            );
          });
        }
        return ({dom: null, key: null, template: __1229343019, templateValue: rows, templateElements: null, templateTypes: null, t7ref: t7});
    }
  }

  t7.assign("TestTable", TestTable);

  class Header extends Inferno.Component {
    handleClick(counter) {
        this.props.runTest(counter);
    }
    render() {
        return ({dom: null, key: null, template: __02028456066, templateValues: [this.props.running, this.handleClick.bind(this, 500), this.props.running, this.handleClick.bind(this, 1500), this.props.running, this.handleClick.bind(this, 2500), this.props.running, this.handleClick.bind(this, 5000), this.props.duration || ""], templateElements: Array(9), templateTypes: Array(9), t7ref: t7});
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
        ({dom: null, component: t7.loadComponent("TestTable"), props:  {'rows':[]}, key: null, template: null}),
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
                ({dom: null, component: t7.loadComponent("TestTable"), props:  {'rows':this.state.rows}, key: null, template: null}),
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
      return ({dom: null, key: null, template: __1392273188, templateValues: [this.runTest, this.state.running, this.state.duration], templateElements: Array(3), templateTypes: Array(3), t7ref: t7});
    }
  }

  t7.assign("TestApp", TestApp);

  Inferno.render(
    ({dom: null, component: t7.loadComponent("TestApp"), props:  {}, key: null, template: null}),
    document.getElementById('content')
  );

});

/*t7 precompiled templates*/
;function __1229343019(fragment, component, t7){"use strict";var root = Inferno.dom.createElement('table');Inferno.dom.addAttributes(root, {'class':'table'}, component);var n_0 = Inferno.dom.createElement('thead');var n_0_0 = Inferno.dom.createElement('tr');var n_0_0_0 = Inferno.dom.createElement('th');var n_0_0_0_0 = Inferno.dom.createElement('input');Inferno.dom.addAttributes(n_0_0_0_0, {'type':'checkbox'}, component);n_0_0_0.appendChild(n_0_0_0_0);n_0_0.appendChild(n_0_0_0);var n_0_0_1 = Inferno.dom.createElement('th');n_0_0_1.textContent='Status';n_0_0.appendChild(n_0_0_1);var n_0_0_2 = Inferno.dom.createElement('th');n_0_0_2.textContent='Name';n_0_0.appendChild(n_0_0_2);var n_0_0_3 = Inferno.dom.createElement('th');n_0_0_3.textContent='Email';n_0_0.appendChild(n_0_0_3);var n_0_0_4 = Inferno.dom.createElement('th');n_0_0_4.textContent='field1';n_0_0.appendChild(n_0_0_4);var n_0_0_5 = Inferno.dom.createElement('th');n_0_0_5.textContent='field2';n_0_0.appendChild(n_0_0_5);var n_0_0_6 = Inferno.dom.createElement('th');n_0_0_6.textContent='field3';n_0_0.appendChild(n_0_0_6);var n_0_0_7 = Inferno.dom.createElement('th');n_0_0_7.textContent='field4';n_0_0.appendChild(n_0_0_7);var n_0_0_8 = Inferno.dom.createElement('th');n_0_0_8.textContent='field5';n_0_0.appendChild(n_0_0_8);var n_0_0_9 = Inferno.dom.createElement('th');n_0_0_9.textContent='field6Date';n_0_0.appendChild(n_0_0_9);var n_0_0_10 = Inferno.dom.createElement('th');n_0_0_10.textContent='field7';n_0_0.appendChild(n_0_0_10);var n_0_0_11 = Inferno.dom.createElement('th');n_0_0_11.textContent='field8';n_0_0.appendChild(n_0_0_11);var n_0_0_12 = Inferno.dom.createElement('th');n_0_0_12.textContent='field9';n_0_0.appendChild(n_0_0_12);var n_0_0_13 = Inferno.dom.createElement('th');n_0_0_13.textContent='field10';n_0_0.appendChild(n_0_0_13);n_0.appendChild(n_0_0);root.appendChild(n_0);var n_1 = Inferno.dom.createElement('tbody');if(typeof fragment.templateValue !== 'object') {n_1.textContent=(fragment.templateValue === '' ? ' ' : fragment.templateValue);fragment.templateType = Inferno.Type.TEXT;} else {fragment.templateType = (fragment.templateValue.constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElement = n_1;root.appendChild(n_1);fragment.dom = root;};__1229343019.key=1229343019;
;function __1297586528(fragment, component, t7){"use strict";var root = Inferno.dom.createElement('tr');var n_0 = Inferno.dom.createElement('td');var n_0_0 = Inferno.dom.createElement('input');Inferno.dom.addAttributes(n_0_0, {'type':'checkbox'}, component);n_0.appendChild(n_0_0);root.appendChild(n_0);var n_1 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[0] !== 'object') {n_1.textContent=(fragment.templateValues[0] === '' ? ' ' : fragment.templateValues[0]);fragment.templateTypes[0] = Inferno.Type.TEXT;} else {fragment.templateTypes[0] = (fragment.templateValues[0].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[0] = n_1;root.appendChild(n_1);var n_2 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[1] !== 'object') {n_2.textContent=(fragment.templateValues[1] === '' ? ' ' : fragment.templateValues[1]);fragment.templateTypes[1] = Inferno.Type.TEXT;} else {fragment.templateTypes[1] = (fragment.templateValues[1].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[1] = n_2;root.appendChild(n_2);var n_3 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[2] !== 'object') {n_3.textContent=(fragment.templateValues[2] === '' ? ' ' : fragment.templateValues[2]);fragment.templateTypes[2] = Inferno.Type.TEXT;} else {fragment.templateTypes[2] = (fragment.templateValues[2].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[2] = n_3;root.appendChild(n_3);var n_4 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[3] !== 'object') {n_4.textContent=(fragment.templateValues[3] === '' ? ' ' : fragment.templateValues[3]);fragment.templateTypes[3] = Inferno.Type.TEXT;} else {fragment.templateTypes[3] = (fragment.templateValues[3].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[3] = n_4;root.appendChild(n_4);var n_5 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[4] !== 'object') {n_5.textContent=(fragment.templateValues[4] === '' ? ' ' : fragment.templateValues[4]);fragment.templateTypes[4] = Inferno.Type.TEXT;} else {fragment.templateTypes[4] = (fragment.templateValues[4].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[4] = n_5;root.appendChild(n_5);var n_6 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[5] !== 'object') {n_6.textContent=(fragment.templateValues[5] === '' ? ' ' : fragment.templateValues[5]);fragment.templateTypes[5] = Inferno.Type.TEXT;} else {fragment.templateTypes[5] = (fragment.templateValues[5].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[5] = n_6;root.appendChild(n_6);var n_7 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[6] !== 'object') {n_7.textContent=(fragment.templateValues[6] === '' ? ' ' : fragment.templateValues[6]);fragment.templateTypes[6] = Inferno.Type.TEXT;} else {fragment.templateTypes[6] = (fragment.templateValues[6].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[6] = n_7;root.appendChild(n_7);var n_8 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[7] !== 'object') {n_8.textContent=(fragment.templateValues[7] === '' ? ' ' : fragment.templateValues[7]);fragment.templateTypes[7] = Inferno.Type.TEXT;} else {fragment.templateTypes[7] = (fragment.templateValues[7].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[7] = n_8;root.appendChild(n_8);var n_9 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[8] !== 'object') {n_9.textContent=(fragment.templateValues[8] === '' ? ' ' : fragment.templateValues[8]);fragment.templateTypes[8] = Inferno.Type.TEXT;} else {fragment.templateTypes[8] = (fragment.templateValues[8].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[8] = n_9;root.appendChild(n_9);var n_10 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[9] !== 'object') {n_10.textContent=(fragment.templateValues[9] === '' ? ' ' : fragment.templateValues[9]);fragment.templateTypes[9] = Inferno.Type.TEXT;} else {fragment.templateTypes[9] = (fragment.templateValues[9].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[9] = n_10;root.appendChild(n_10);var n_11 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[10] !== 'object') {n_11.textContent=(fragment.templateValues[10] === '' ? ' ' : fragment.templateValues[10]);fragment.templateTypes[10] = Inferno.Type.TEXT;} else {fragment.templateTypes[10] = (fragment.templateValues[10].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[10] = n_11;root.appendChild(n_11);var n_12 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[11] !== 'object') {n_12.textContent=(fragment.templateValues[11] === '' ? ' ' : fragment.templateValues[11]);fragment.templateTypes[11] = Inferno.Type.TEXT;} else {fragment.templateTypes[11] = (fragment.templateValues[11].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[11] = n_12;root.appendChild(n_12);var n_13 = Inferno.dom.createElement('td');if(typeof fragment.templateValues[12] !== 'object') {n_13.textContent=(fragment.templateValues[12] === '' ? ' ' : fragment.templateValues[12]);fragment.templateTypes[12] = Inferno.Type.TEXT;} else {fragment.templateTypes[12] = (fragment.templateValues[12].constructor === Array ? Inferno.Type.LIST : Inferno.Type.FRAGMENT);}fragment.templateElements[12] = n_13;root.appendChild(n_13);fragment.dom = root;};__1297586528.key=1297586528;
;function __1392273188(fragment, component, t7){"use strict";var root = Inferno.dom.createElement('div');if(Inferno.Type.COMPONENT_PROPS.runTest === undefined) { Inferno.Type.COMPONENT_PROPS.runTest = 'runTest'; }fragment.templateTypes[0] = Inferno.Type.COMPONENT_PROPS.runTest;if(Inferno.Type.COMPONENT_PROPS.running === undefined) { Inferno.Type.COMPONENT_PROPS.running = 'running'; }fragment.templateTypes[1] = Inferno.Type.COMPONENT_PROPS.running;if(Inferno.Type.COMPONENT_PROPS.duration === undefined) { Inferno.Type.COMPONENT_PROPS.duration = 'duration'; }fragment.templateTypes[2] = Inferno.Type.COMPONENT_PROPS.duration;var n_0 = Inferno.dom.createComponent(root, t7.loadComponent('Header'), {'runTest':fragment.templateValues[0],'running':fragment.templateValues[1],'duration':fragment.templateValues[2]});fragment.templateElements[0] = n_0;fragment.templateElements[1] = n_0;fragment.templateElements[2] = n_0;var n_1 = Inferno.dom.createElement('div');Inferno.dom.addAttributes(n_1, {'id':'table'}, component);root.appendChild(n_1);fragment.dom = root;};__1392273188.key=1392273188;
;function __02028456066(fragment, component, t7){"use strict";var root = Inferno.dom.createElement('div');var n_0 = Inferno.dom.createElement('p');var n_0_0 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_0, {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index.html'}, component);n_0_0.textContent='AngularJS v1.2.20';n_0.appendChild(n_0_0);var n_0_1 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_1, {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index2.html'}, component);n_0_1.textContent='AngularJS v1.3.9';n_0.appendChild(n_0_1);var n_0_2 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_2, {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index3.html'}, component);n_0_2.textContent='AngularJS v1.4.0';n_0.appendChild(n_0_2);var n_0_3 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_3, {'class':'btn btn-lg btn-link','role':'button','href':'../angular2/dist/index.html'}, component);n_0_3.textContent='AngularJS v2.0.0-alpha.26';n_0.appendChild(n_0_3);var n_0_4 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_4, {'class':'btn btn-lg btn-link','role':'button','href':'../reactjs/index.html'}, component);n_0_4.textContent='ReactJs 0.13.0';n_0.appendChild(n_0_4);var n_0_5 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_5, {'class':'btn btn-lg btn-link selected','role':'button'}, component);n_0_5.textContent='InfernoJS 0.2.3';n_0.appendChild(n_0_5);var n_0_6 = Inferno.dom.createElement('a');Inferno.dom.addAttributes(n_0_6, {'class':'btn btn-lg btn-link','role':'button','href':'../raw/index.html'}, component);n_0_6.textContent='HTML DOM';n_0.appendChild(n_0_6);root.appendChild(n_0);var n_1 = Inferno.dom.createElement('p');var n_1_0 = Inferno.dom.createElement('a');fragment.templateTypes[0] = Inferno.Type.ATTR_DISABLED;fragment.templateElements[0] = n_1_0;if(Inferno.Type.ATTR_OTHER.onClick === undefined) { Inferno.Type.ATTR_OTHER.onClick = 'onClick'; }fragment.templateTypes[1] = Inferno.Type.ATTR_OTHER.onClick;fragment.templateElements[1] = n_1_0;Inferno.dom.addAttributes(n_1_0, {'class':'btn btn-lg btn-success','role':'button','disabled':fragment.templateValues[0],'onClick':fragment.templateValues[1]}, component);n_1_0.textContent='500 records';n_1.appendChild(n_1_0);var n_1_1 = Inferno.dom.createElement('a');fragment.templateTypes[2] = Inferno.Type.ATTR_DISABLED;fragment.templateElements[2] = n_1_1;if(Inferno.Type.ATTR_OTHER.onClick === undefined) { Inferno.Type.ATTR_OTHER.onClick = 'onClick'; }fragment.templateTypes[3] = Inferno.Type.ATTR_OTHER.onClick;fragment.templateElements[3] = n_1_1;Inferno.dom.addAttributes(n_1_1, {'class':'btn btn-lg btn-success','role':'button','disabled':fragment.templateValues[2],'onClick':fragment.templateValues[3]}, component);n_1_1.textContent='1500 records';n_1.appendChild(n_1_1);var n_1_2 = Inferno.dom.createElement('a');fragment.templateTypes[4] = Inferno.Type.ATTR_DISABLED;fragment.templateElements[4] = n_1_2;if(Inferno.Type.ATTR_OTHER.onClick === undefined) { Inferno.Type.ATTR_OTHER.onClick = 'onClick'; }fragment.templateTypes[5] = Inferno.Type.ATTR_OTHER.onClick;fragment.templateElements[5] = n_1_2;Inferno.dom.addAttributes(n_1_2, {'class':'btn btn-lg btn-success','role':'button','disabled':fragment.templateValues[4],'onClick':fragment.templateValues[5]}, component);n_1_2.textContent='2500 records';n_1.appendChild(n_1_2);var n_1_3 = Inferno.dom.createElement('a');fragment.templateTypes[6] = Inferno.Type.ATTR_DISABLED;fragment.templateElements[6] = n_1_3;if(Inferno.Type.ATTR_OTHER.onClick === undefined) { Inferno.Type.ATTR_OTHER.onClick = 'onClick'; }fragment.templateTypes[7] = Inferno.Type.ATTR_OTHER.onClick;fragment.templateElements[7] = n_1_3;Inferno.dom.addAttributes(n_1_3, {'class':'btn btn-lg btn-success','role':'button','disabled':fragment.templateValues[6],'onClick':fragment.templateValues[7]}, component);n_1_3.textContent='5000 records';n_1.appendChild(n_1_3);root.appendChild(n_1);var n_2 = Inferno.dom.createElement('div');Inferno.dom.addAttributes(n_2, {'class':'well well-sm'}, component);var n_2_0 = Inferno.dom.createElement('span');Inferno.dom.addAttributes(n_2_0, {'class':'text-muted'}, component);n_2_0.textContent='Duration to render';n_2.appendChild(n_2_0);var n_2_1;if(typeof fragment.templateValues[8] !== 'object') {n_2_1 = Inferno.dom.createText(fragment.templateValues[8]);fragment.templateTypes[8] = Inferno.Type.TEXT_DIRECT;} else {n_2_1 = Inferno.dom.createEmpty();fragment.templateTypes[8] = (fragment.templateValues[8].constructor === Array ? Inferno.Type.LIST_REPLACE : Inferno.Type.FRAGMENT_REPLACE);}fragment.templateElements[8] = n_2_1;n_2.appendChild(n_2_1);var n_2_2 = Inferno.dom.createText(' ms                ');n_2.appendChild(n_2_2);root.appendChild(n_2);fragment.dom = root;};__02028456066.key=-2028456066;
