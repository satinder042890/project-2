// *** Dependencies
var express=require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Sets up the Express App
var app=express();
var PORT = process.env.PORT || 8000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
 db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
   });
  
