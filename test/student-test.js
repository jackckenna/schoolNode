var chai = require('chai');
var chaihttp = require('chai-http');
var app = require("../app");
var should = chai.should();
var expect = chai.expect;

chai.use(chaihttp);


//Test to 
describe("Students", function(){
 it('should list all students on / GET', function(done) {
   // create a request manager that uses our app
    var request = chai.request(app);

    // send a request
    request
      .get('/students')
      .end(function(err, res){

            // check we got a 200 response
            res.should.have.status(200);

            // and that it's html
            res.should.be.html;

            res.text.should.match(/Welcome to the Students Page/)

            // finish the test ( don't forget this! )
            done();

      });
  });


});


describe("Show single user page  /GET", function(){
 it('should show the users first name, last name and year/ GET', function(done) {
   // create a request manager that uses our app
    var request = chai.request(app);

    // send a request
    request
      .get('/students/57e2c40e6f4e4f79c761dfc9')
      .end(function(err, res){

            // check we got a 200 response
            res.should.have.status(200);

            // and that it's html
            res.should.be.html;

            res.text.should.match(/First name/);

            done();

      });
  });
});

it('should add a SINGLE students on / POST' , function(done){
   var request = chai.request(app);

   request.post('/students')
       .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
       .send({'firstname': 'Test Name', 'secondname': 'Test sname' , 'Year': 10}) // the data to be posted
       .end(function(err, res){

         res.should.have.status(200);
         res.should.be.html;

         // we should end up back on the homepage
         //res.text.should.match(/Welcome to the homepage/);

         // make another request to make sure it was created
         request
           .get('/students')
           .end(function(err, res){

               res.should.have.status(200);
               res.should.be.html;

               // was the post correctly created
               //res.text.should.match(/Test Post/);
               res.text.should.match(/Welcome to the Students Page/);

               done();
           });

       });

});

// // describe a test for PUT
 
// it('update a single student /<id> PUT' , function(done){

//    var request = chai.request(app);

//    request.put('students/2')
//        .set('content-type', 'application/x-www-form-urlencoded')
//        .send({'title': 'Updated Post', 'body': 'Updated Text'})
//        .end(function(err, res){

//          res.should.have.status(200);
//          res.should.be.html;
//          res.text.should.match(/Welcome to the Students Page/);

//          request
//            .get('students/2')
//            .end(function(err, res){

//                res.should.have.status(200);
//                res.should.be.html;
//                res.text.should.match(/Welcome to the Students Page/);
//                done();
//            });

//        });

//  });



//  it('should delete a SINGLE post on /<id> DELETE' , function(done) {

//    var request = chai.request(app);

//    request.delete('/3')
//        .end(function(err, res){

//          res.should.have.status(200);
//          res.should.be.html;
//          res.text.should.match(/Welcome to the homepage/);

//          request
//            .get('/3')
//            .end(function(err, res){

//                res.should.have.status(404);
//                done();

//            });

//        });

//  });