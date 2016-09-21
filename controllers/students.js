// var students = [{
//   id: 0,
//   firstname: "Adam",
//   secondname: "Flannel",
//   Year: "4"
// },
// {
//     id: 1,
//     firstname : "Jack",
//     secondname: "Kenna",
//     Year: "5"
// },
// {
//     id: 2,
//     firstname : "Far",
//     secondname: "Bia",
//     Year: "5"
// }];



var Student = require("../models/student"); 

// INDEX
function indexStudents(req, res) {
    Student.find({}, function(err, students){
    res.render("students/index", {
      students: students
    });
});
}

// SHOW
function showStudents(req, res) {

    Student.findById(req.params.id, function(err, student){
    if (!student) return res.status(404).send("Not Found");
    if(err) return res.status(500).send(err);
    res.render("students/show" ,{
      title : "Student",
      student : student
    });
  });


}

// CREATE
function createStudents(req, res) {
    
  Student.create(req.body, function(err, student){
    if(err) console.log(err);
    res.status(200).redirect("/students");
  })

}

// NEW
function newStudents(req, res) {

  var student = {
    firstname: "",
    secondname: "",
    Year: ""
  };

  res.render("students/new", {
   students: student,
   edit:false
  });
}

// UPDATE
function updateStudents(req, res) {

 Student.findByIdAndUpdate(req.params.id, {$set : req.body }, function(err, student){
       // redirect the user to a GET route. We'll go back to the INDEX.
     
    res.redirect("/students");
  });


}

// DELETE
function deleteStudents(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editStudents(req, res) {

  Student.findById(req.params.id , function(err, student) {
      // check for errors or for no object found
      if(!student) return res.status(404).send("Not found");
      if(err) return res.status(500).send(err);

      res.render("students/edit" , {
        title: "Student",
        students: student,
        edit:true

      });

  });
  
}


module.exports = {
  index : indexStudents,
  show : showStudents,
  create : createStudents,
  new : newStudents,
  update : updateStudents,
  delete : deleteStudents,
  edit : editStudents
};
