var mongoose = require("mongoose");

var TeacherSchema = mongoose.Schema({
	firstname: { 
		type: String, 
		required: true
	},
	secondname: {
		type: String, 
		required: true
	},
	subject: {
		type: String, 
		required: true
	}
});

module.exports = mongoose.model('Teachers', TeacherSchema);