var express = require("express");
var router = express.Router();
var NewSignup = require("../models/users.model");

//testing to see if I get anything on the page
router.get("/", function(req, res, next) {
  res.render("newSignup", {
    title: "Welcome to the Question Bank. Please sign up:",
    newSignup: {
      name: "",
      email: "",
      password: ""
    }
  });
});

router.post("/", function(req, res, next) {
  const u = req.body; //?
  const newSignup = new NewSignup({
    //keeps telling me undefined...FREAKING CAPITAL LETTERS!!!!!
    name: u.name,
    email: u.email,
    password: u.password
  });

  newSignup.save(function(err, payload) {
    if (err) {
      var errMessage = "";
      for (var errName in err.errors) {
        console.log(errName);
        switch (err.errors[errName].type) {
          case ValidationErrors.REQUIRED:
            errMessage += "Missing Field: " + errName;
            break;
          case ValidationErrors.NOTVALID:
            errMessage = "Invalid Field: " + errName;
            break;
        }
      }
      res.render("newSignup", {
        name: u,
        error: true,
        errorMessage: errMessage
      });
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
