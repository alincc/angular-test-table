var TestTable = React.createClass({
    render: function () {
        var rows = [];
        if (this.props.rows) {
            this.props.rows.forEach(function (row) {

                rows.push(<tr>
                    <td>
                        <input type="checkbox"/>
                    </td>

                    <td>{ row.status }</td>

                    <td>{ row.name }</td>

                    <td>{ row.email }</td>

                    <td>{ row.field1 }</td>

                    <td>{ row.field2 }</td>

                    <td>{ row.field3 }</td>

                    <td>{ row.field4 }</td>

                    <td>{ row.field5 }</td>

                    <td>{ row.field6Data }</td>

                    <td>{ row.field7 }</td>

                    <td>{ row.field8 }</td>

                    <td>{ row.field9 }</td>

                    <td>{ row.field10 }</td>
                </tr>);
            });
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                        </th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>field1</th>
                        <th>field2</th>
                        <th>field3</th>
                        <th>field4</th>
                        <th>field5</th>
                        <th>field6Date</th>
                        <th>field7</th>
                        <th>field8</th>
                        <th>field9</th>
                        <th>field10</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
})

var Header = React.createClass({
    handleClick: function (counter) {
        this.props.runTest(counter);
    },
    render: function () {
        return (
            <div>
                <p>
                    <a className="btn btn-lg btn-link" role="button" href="../angular1/index.html">AngularJS v1.2.20</a>
                    <a className="btn btn-lg btn-link" role="button" href="../angular1/index2.html">AngularJS v1.3.9</a>
                    <a className="btn btn-lg btn-link" role="button" href="../angular1/index3.html">AngularJS v1.4.0</a>
                    <a className="btn btn-lg btn-link" role="button" href="../angular2/dist/index.html">AngularJS v2.0.0-alpha.26</a>
                    <a className="btn btn-lg btn-link selected" role="button">ReactJs 0.13.0</a>
                    <a className="btn btn-lg btn-link" role="button" href="../raw/index.html">HTML DOM</a>
                </p>

                <p>
                    <a className="btn btn-lg btn-success" role="button" disabled={this.props.running} onClick={this.handleClick.bind(null, 500)}>500 records</a>
                    <a className="btn btn-lg btn-success" role="button" disabled={this.props.running} onClick={this.handleClick.bind(null, 1500)}>1500 records</a>
                    <a className="btn btn-lg btn-success" role="button" disabled={this.props.running} onClick={this.handleClick.bind(null, 2500)}>2500 records</a>
                    <a className="btn btn-lg btn-success " role="button" disabled={this.props.running} onClick={this.handleClick.bind(null, 5000)}>5000 records</a>
                </p>

                <div className="well well-sm">
                    <span className="text-muted">Duration to render</span> {this.props.duration} ms
                </div>
            </div>
        );
    }
})

var TestApp = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    runTest: function (counter) {
        this.setState({rows: [], running: true});

        $.ajax({
            url: '../data/' + counter + '.json',
            dataType: 'json',
            cache: true,
            success: function (data) {
                console.log('Loading records completed');
                this.setState({rows: data, running: false});

                var start = new Date();

                React.render(<TestTable rows={this.state.rows}></TestTable>, document.getElementById("table"));

                this.setState({duration: new Date() - start});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error('Error', status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div>
                <Header runTest={this.runTest} running={this.state.running} duration={this.state.duration}></Header>
                <div id="table"></div>
            </div>
        );
    }
});

React.render(
    <TestApp />,
    document.getElementById('content')
);