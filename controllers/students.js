var students = [{
  id: 0,
  firstname: "Adam",
  secondname: "Flannel",
  Year: "4"
},
{
    id: 1,
    firstname : "Jack",
    secondname: "Kenna",
    Year: "5"
},
{
    id: 2,
    firstname : "Far",
    secondname: "Bia",
    Year: "5"
}];



// INDEX
function indexStudents(req, res) {
  res.render("students/index", {
    students: students
  });
}

// SHOW
function showStudents(req, res) {

  var student = students[req.params.id];
  res.render("students/show" ,{
    title : "Student",
    student : student

  });

}

// CREATE
function createStudents(req, res) {
  res.send("CREATE");
}

// NEW
function newStudents(req, res) {

  var student = {
    id: "",
    firstname: "",
    secondname: "",
    Year: ""
  };

  res.render("students/new", {
   student: student,
   edit:false
  });
}

// UPDATE
function updateStudents(req, res) {

  var student = students[req.params.id];
  student.firstname=req.body.firstname;
  student.secondname=req.body.secondname;
  student.Year=req.body.Year;

  students[req.params.id]=student;

  res.redirect("/students");
  
}

// DELETE
function deleteStudents(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editStudents(req, res) {

  res.render("students/edit", {
    students: students[req.params.id],
    edit:true
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
