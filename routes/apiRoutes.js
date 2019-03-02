// Dependencies

var db = require("../models");

// Routes

module.exports = function (app) {
    // POST route for saving a new post
    app.post("/signup/post", function (req, res) {
        console.log(req.body);
        console.log(db);
        db.userSignUp.create({
            userName: req.body.username,
            password: req.body.password,
            monthlyIncome: req.body.monthlyIncome
        }).then(function (dbPost) {
                // res.json(dbPost);
                console.log("new user added");
            });
    });
}