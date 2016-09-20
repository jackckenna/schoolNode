var express = require('express');
var router = express.Router();

var postsController = require('../controllers/posts')

// add routes here 
//ROUTES GO BETWEEN RETQUIREMENTS AND THE LISTEN (HERE)


//different syntax example using the "/" route 
router.route("/students")
	.get(postsController.index)
	.post(postsController.create)

router.route("/students/new")
	.get(postsController.new)

router.route("/students/:id")
	.get(postsController.show)
	.put(postsController.update)
	.delete(postsController.delete)

router.route('/students/:id/edit')
	.get(postsController.edit);


module.exports = router;
