(function() {


	function TestApp()
	{

	}

	TestApp.prototype.bootstrap = function()
	{
		console.log('bootstrap');

		// prepare row template
		this.rowTemplate = document.querySelector('#testRow');

		this.rowMapping = ['select','status', 'name', 'email', 'field1', 'field2', 'field3', 'field4', 'field5',
			'field6Data', 'field7', 'field8', 'field9', 'field10']
	}

	// Run the test
	TestApp.prototype.run = function(count)
	{
		console.log('run', count);

		var vm = this;

		vm.loadData(count, function(result){
			vm.renderTable(result);
		});
	}

	TestApp.prototype.enableButton = function(state)
	{
		var elements = document.getElementsByClassName('btn');
		for(var i = 0; i<elements.length; i++)
		{
			elements[i].disabled = state ?  false : true;
		}
	}

	// Render table
	TestApp.prototype.renderTable = function(data)
	{
		var vm = this;

		console.log('renderTable');

		vm.enableButton(false);
		vm.clearChildren();

		var tableDiv = document.getElementById('table');
		tableDiv.style.display = 'none';

		if(!data)
		{
			console.log('No data');
			return;
		}

		setTimeout(function(){
			this.start = new Date();

			// Table and header
			var fragment = vm.getBaseTable();
			var table = fragment.firstElementChild;

			for(var i = 0; i < data.length; i++)
			{
				table.appendChild(vm.createRow(data[i]));
			}

			document.getElementById('table').appendChild(fragment.appendChild(table));
			tableDiv.style.display = '';

			var duration = new Date() - start;
			console.log('Duration', duration);
			document.getElementById('duration').textContent = duration;

			vm.enableButton(true);
		}, 1);

	}

	TestApp.prototype.getBaseTable = function(){
		var t = document.querySelector('#baseTable');
		return document.importNode(t.content, true);
	}

	TestApp.prototype.createRow = function(data){
		var row = document.importNode(this.rowTemplate.content, true).firstElementChild;
		var i = 0;
		for(var field in this.rowMapping)
		{
			var value = data[this.rowMapping[field]];
			//if(!row.children[i].hasChildNodes())
			// skip first column
			if(i>0)
			{
				row.children[i].textContent = value ? value : '';
			}

			i++;
		}
		return row;
	}

	// Clear prev table
	TestApp.prototype.clearChildren = function()
	{
		var root = document.getElementById('table');
		if(root.hasChildNodes())
			root.removeChild(root.firstChild);
	}

	// Load data
	TestApp.prototype.loadData = function(count, callback)
	{
		console.log('loadData', count);

		var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', '../data/' + count + '.json', true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var jsonResult = JSON.parse(xmlhttp.responseText);
                callback(jsonResult);
            }
        };

        xmlhttp.send(null);
	}

	window.testApp = new TestApp();
}());

testApp.bootstrap();