var express = require('express');
var router = express.Router();

var studentsController = require('../controllers/students')
var teachersController = require('../controllers/teachers')
var generalController = require('../controllers/general')
// add routes here 
//ROUTES GO BETWEEN RETQUIREMENTS AND THE LISTEN (HERE)


//different syntax example using the "/" route 
router.route("/")
	.get(generalController.index)

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

router.route("/teachers")
	.get(teachersController.index)
	.post(teachersController.create)

router.route("/teachers/new")
	.get(teachersController.new)

router.route("/teachers/:id")
	.get(teachersController.show)
	.put(teachersController.update)
	.delete(teachersController.delete)

router.route('/teachers/:id/edit')
	.get(teachersController.edit);


module.exports = router;
