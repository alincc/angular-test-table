"use strict";


t7.module(function(t7) {

  class TestTable extends Inferno.Component {
    render() {
        var rows = [];
        if (this.props.rows) {
          this.props.rows.forEach(function (row) {
            rows.push(
              {tag: 'tr',children: [{tag: Inferno.Tag.TD,children: [{tag: 'input',attrs: {'type':'checkbox'}}]},{tag: Inferno.Tag.TD,children: row.status},{tag: Inferno.Tag.TD,children: row.name},{tag: Inferno.Tag.TD,children: row.email},{tag: Inferno.Tag.TD,children: row.field1},{tag: Inferno.Tag.TD,children: row.field2},{tag: Inferno.Tag.TD,children: row.field3},{tag: Inferno.Tag.TD,children: row.field4},{tag: Inferno.Tag.TD,children: row.field5},{tag: Inferno.Tag.TD,children: row.field6Data},{tag: Inferno.Tag.TD,children: row.field7},{tag: Inferno.Tag.TD,children: row.field8},{tag: Inferno.Tag.TD,children: row.field9},{tag: Inferno.Tag.TD,children: row.field10}]}
            );
          });
        }
        return {tag: 'table',attrs: {'class':'table'},children: [{tag: 'thead',children: [{tag: 'tr',children: [{tag: Inferno.Tag.TH,children: [{tag: 'input',attrs: {'type':'checkbox'}}]},{tag: Inferno.Tag.TH,children: 'Status'},{tag: Inferno.Tag.TH,children: 'Name'},{tag: Inferno.Tag.TH,children: 'Email'},{tag: Inferno.Tag.TH,children: 'field1'},{tag: Inferno.Tag.TH,children: 'field2'},{tag: Inferno.Tag.TH,children: 'field3'},{tag: Inferno.Tag.TH,children: 'field4'},{tag: Inferno.Tag.TH,children: 'field5'},{tag: Inferno.Tag.TH,children: 'field6Date'},{tag: Inferno.Tag.TH,children: 'field7'},{tag: Inferno.Tag.TH,children: 'field8'},{tag: Inferno.Tag.TH,children: 'field9'},{tag: Inferno.Tag.TH,children: 'field10'}]}]},{tag: 'tbody',children: rows}]};
    }
  }

  t7.assign("TestTable", TestTable);

  class Header extends Inferno.Component {
    handleClick(counter) {
        this.props.runTest(counter);
    }
    render() {
        return {tag: Inferno.Tag.DIV,children: [{tag: 'p',children: 
        [{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index.html'},
        children: 'AngularJS v1.2.20'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index2.html'},
        children: 'AngularJS v1.3.9'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../angular1/index3.html'},
        children: 'AngularJS v1.4.0'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../angular2/dist/index.html'},
        children: 'AngularJS v2.0.0-alpha.26'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../reactjs/index.html'},
        children: 'ReactJs 0.13.0'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link selected','role':'button'},
        children: 'InfernoJS 0.1.27'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-link','role':'button','href':'../raw/index.html'},
        children: 'HTML DOM'}]},{tag: 'p',children: [{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-success','role':'button','disabled':this.props.running,'onClick':this.handleClick.bind(this, 500)},
        children: '500 records'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-success','role':'button','disabled':this.props.running,'onClick':this.handleClick.bind(this, 1500)},
        children: '1500 records'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-success','role':'button','disabled':this.props.running,'onClick':this.handleClick.bind(this, 2500)},
        children: '2500 records'},{tag: Inferno.Tag.A,attrs: {'class':'btn btn-lg btn-success','role':'button','disabled':this.props.running,'onClick':this.handleClick.bind(this, 1500)},
        children: '5000 records'}]},{tag: Inferno.Tag.DIV,attrs: {'class':'well well-sm'},
        children: [{tag: Inferno.Tag.SPAN,attrs: {'class':'text-muted'},
        children: 'Duration to render'},this.props.duration || "",' ms']}]};
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
      Inferno.unmountComponentAtNode(document.getElementById("table"));

      $.ajax({
          url: '../data/' + counter + '.json',
          dataType: 'json',
          cache: true,
          success: function (data) {
              console.log('Loading records completed');

              var start = new Date();
              this.setState({rows: data, running: false});
              Inferno.render(
                {component:TestTable, props: {'rows':this.state.rows}},
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
      return {tag: Inferno.Tag.DIV,children: [{component:Header, props: {'runTest':this.runTest,'running':this.state.running,'duration':this.state.duration}},{tag: Inferno.Tag.DIV,attrs: {'id':'table'}}]};
    }
  }

  t7.assign("TestApp", TestApp);

  Inferno.render(
    {component:TestApp, props: {}},
    document.getElementById('content')
  );

});