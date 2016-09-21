var teachers = [{
  id: 0,
  firstname: "Ollie ",
  secondname: "Molie",
  subject: "Sub"
},
{
    id: 1,
    firstname : "Ben",
    secondname: "Allen",
    subject: "everything"
},
{
    id: 2,
    firstname : "Dan",
    secondname: "Smith",
    subject: "swimming"
}];



// INDEX
function indexTeachers(req, res) {
  res.render("teachers/index", {
    teachers: teachers
  });
}

// SHOW
function showTeachers(req, res) {

  var teacher = teachers[req.params.id];
  res.render("teachers/show" ,{
    title : "Student",
    teachers : teacher

  });

}

// CREATE
function createTeachers(req, res) {
  res.send("CREATE");
}

// NEW
function newTeachers(req, res) {

  var teacher = {
    id: "",
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
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteTeachers(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editTeachers(req, res) {

  res.render("teachers/edit", {
    teachers: teachers[req.params.id],
    edit:true
  });

}


module.exports = {
  index : indexTeachers,
  show : showTeachers,
  create : createTeachers,
  new : newTeachers,
  update : indexTeachers,
  delete : deleteTeachers,
  edit : editTeachers
};
