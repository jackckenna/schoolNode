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
  res.render("students/new", {

  });
}

// UPDATE
function updateStudents(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteStudents(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editStudents(req, res) {
  res.send("EDIT:" + req.params.id);
}


module.exports = {
  index : indexStudents,
  show : showStudents,
  create : createStudents,
  new : newStudents,
  update : indexStudents,
  delete : deleteStudents,
  edit : editStudents
};
