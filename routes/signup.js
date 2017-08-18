var express = require("express");
var router = express.Router();

//var signup = require("../models/users.model");

//testing to see if I get anything on the page
router.get("/", function(req, res, next) {
  res.render("signup", {
    title: "Welcome to the Question Bank. Please sign up:"
  });
});

module.exports = router;
