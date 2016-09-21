var Teacher = require("../models/teacher"); 

// INDEX
function indexTeachers(req, res) {
  Teacher.find({}, function(err, teachers){
    res.render("teachers/index", {
      teachers: teachers
    });
   }); 
}

// SHOW
function showTeachers(req, res) {

 Teacher.findById(req.params.id, function(err, teacher){
    if (!teacher) return res.status(404).send("Not Found");
    if(err) return res.status(500).send(err);
    res.render("teachers/show" ,{
      title : "Teacher",
      teacher : teacher
    });
  });

}

// CREATE
function createTeachers(req, res) {

    Teacher.create(req.body, function(err, teacher){
    if(err) console.log(err);
    res.status(200).redirect("/teachers");
  });
}

// NEW
function newTeachers(req, res) {


  var teacher = {
    firstname: "",
    secondname: "",
    subject: ""
  };

  res.render("teachers/new", {
     teachers: teacher,
     edit:false
  });


}

// UPDATE
function updateTeachers(req, res) {

   Teacher.findByIdAndUpdate(req.params.id, {$set : req.body }, function(err, teacher){
       // redirect the user to a GET route. We'll go back to the INDEX.
    res.redirect("/teachers");
  });

}

// DELETE
function deleteTeachers(req, res) {
    // tell the data store to remove the post with the id in the request
  Teacher.findByIdAndRemove(req.params.id, function(err){
    res.redirect("/teachers");
  });

}

// EDIT
function editTeachers(req, res) {

   Teacher.findById(req.params.id , function(err, teacher) {
      // check for errors or for no object found
      if(!teacher) return res.status(404).send("Not found");
      if(err) return res.status(500).send(err);

      res.render("teachers/edit" , {
        title: "Teacher",
        teachers: teacher,
        edit:true

      });

  });
}


module.exports = {
  index : indexTeachers,
  show : showTeachers,
  create : createTeachers,
  new : newTeachers,
  update : updateTeachers,
  delete : deleteTeachers,
  edit : editTeachers
};
