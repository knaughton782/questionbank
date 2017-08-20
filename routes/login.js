var express = require("express");
var router = express.Router();
var Login = require("../models/users.model");

//testing to see if I get anything on the page
router.get("/", function(req, res, next) {
  res.render("login", {
    title: "Welcome to the Question Bank. Please log in:",
    login: {
      email: "",
      password: ""
    }
  });
});

router.post("/", function(req, res, next) {
  const l = req.body;
  const login = new Login({
    email: l.email,
    password: l.password
  });
  Login.aggregate([{ $match: { email: l.email } }], function(err, payload) {
    if (err) {
      next(err);
    }
    if (payload == 0) {
      res.render("login", { errorMessage: "Invalid Entry" });
    } else {
      res.render("users", {
        title: "You are logged in",
        Login: payload
      });
    }
  });
});

module.exports = router;
