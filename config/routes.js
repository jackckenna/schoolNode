var express = require('express');
var router = express.Router();

var studentsController = require('../controllers/students')

// add routes here 
//ROUTES GO BETWEEN RETQUIREMENTS AND THE LISTEN (HERE)


//different syntax example using the "/" route 
router.route("/students")
	.get(studentsController.index)
	.post(studentsController.create)

router.route("/students/new")
	.get(studentsController.new)

router.route("/students/:id")
	.get(studentsController.show)
	.put(studentsController.update)
	.delete(studentsController.delete)

router.route('/students/:id/edit')
	.get(studentsController.edit);


module.exports = router;
