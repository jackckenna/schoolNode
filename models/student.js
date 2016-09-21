var mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
	firstname: { 
		type: String, 
		required: true
	},
	secondname: {
		type: String, 
		required: true
	},
	Year: {
		type: String, 
		required: true
	}
});

module.exports = mongoose.model('Students', StudentSchema);