var jsf = require('json-schema-faker');
var fs = require('fs');

//https://github.com/marak/Faker.js/
var schema = {
  type: 'object',
  properties: {
	id: {
	  $ref: '#/definitions/positiveInt'
	},
	status: {
	  type: 'boolean',
	  faker: "true|false"
	},
	name: {
	  type: 'string',
	  faker: 'name.findName'
	},
	email: {
	  type: 'string',
	  format: 'email',
	  faker: 'internet.email'
	},
	 field1: {
		type: 'string',
		minLength: 5,
		maxLength: 25
	},
	field2: {
		type: 'string',
		minLength: 5,
		maxLength: 25
	},
	field3: {
		type: "string",
		pattern: "yes|no|maybe|i don't know"
	},
	field4: {
		type: "string",
		faker: 'address.city'
	},
	field5: {
		type: "string",
		faker: 'address.zipCode'
	},
	field6Date: {
		type: "number",
		faker: 'date.past'
	},
	field7: {
		type: "string",
		faker: 'phone.phoneNumber'
	},
	field8: {
		type: "string",
		faker: 'internet.userName'
	},
	field9: {
		type: "string",
		faker: 'company.companyName'
	},
	field10: {
		type: "string",
		faker: 'image.imageUrl'
	}
  },
  required: ['id', 'name', 'email', 'status', 'field6Date', 'field1', 'field2', 'field3', 'field4', 'field5', 'field7', 'field8', 'field9', 'field10'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      minimumExclusive: true
    }
  }
};

var totalRecordsToFake = 500;
if(process.argv.length==3)
{
	totalRecordsToFake = process.argv[2];
}

var datafile = totalRecordsToFake + ".json";

var result = [];
for(i=0;i<totalRecordsToFake;i++)
{
	result.push(jsf(schema));
}

fs.writeFile(datafile, JSON.stringify(result, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Generated " + totalRecordsToFake + " records");
}); 