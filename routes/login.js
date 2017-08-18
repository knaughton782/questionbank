var express = require("express");
var router = express.Router();

//testing to see if I get anything on the page
router.get("/", function(req, res, next) {
  res.render("login", {
    title: "Welcome to the Question Bank. Please log in:"
  });
});

module.exports = router;
