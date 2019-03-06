// Dependencies

var db = require("../models");
var passport = require("../config/passport");
// Routes

module.exports = function (app) {

    app.post("/user/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/userprofile");
      });
    
      app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
      });


    // POST route for saving a new post
    app.post("/signup/post", function (req, res) {
        
        db.userSignUp.create({
            userName: req.body.username,
            password: req.body.password,
            monthlyIncome: req.body.monthlyIncome
        }).then(function () {
                res.redirect("/");
                console.log("new user added");
            });
    });

    app.put("/personalize/update",function(req,res){
      db.userSignUp.update({
        personalize:req.body.personalize
      },
      {
      where:{
        id:req.user.id
      }
    }).then(function(data){
        res.json(data);
      })
    });

    app.get("/personalize", function(req, res) {
      db.userSignUp.findOne(
      {
        where:{
          id:req.user.id
        }
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });


    app.get("/username", function(req, res) {
      db.userSignUp.findOne(
      {
        where:{
          id:req.user.id
        }
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });

    app.get("/userdetails", function(req, res) {
      db.income.findAll(
      {
        where:{
          id:req.user.id
        }
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });

    app.post("/user/addexpenses", function (req, res) {
        
      db.income.create({
          monthlyIncome: req.user.monthlyIncome,
          notes:req.body.notes,
          expenses:req.body.expenses,
          category:req.body.category
      }).then(function (data) {
        res.json(data);
          });
  });
  
}