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
        console.log(req.body);
        db.userSignUp.create({
            userName: req.body.username,
            password: req.body.password,
            monthlyIncome: req.body.monthlyIncome
        }).then(function (dbPost) {
                res.json(dbPost);
                console.log("new user added");
            });
    });

    app.put("/personalize/update",function(req,res){
      console.log(req.body);
      db.userSignUp.update({
        personalize:req.body.colorValue
      }).then(function(data){
        res.json(data)
      })
    })
}