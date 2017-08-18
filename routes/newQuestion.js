var router = require("express").Router();
var Question = require("../models/questions.model");

router.get("/", function(req, res, next) {
  res.render("newQuestion"), {
    title: "Add Question Here"
  };
});

router.post("/", function(req, res, next) {
  const q = req.body;
  const newQuestion = new Question({
    question: q.question,
    answer: q.answer,
    author: q.author
  });
  
  newQuestion.save(function(err, payload) {
    if (err) {
      var errMessage = "";
      for (var errName in err.errors) {
        console.log(errName);
        switch (err.errors[errName].type) {
          case ValidationErrors.REQUIRED:
            errMessage += "Missing Field" + errName;
            break;
          case ValidationErrors.NOTVALID:
            errMessage = "Invalid Field" + errName;
            break;
        }
      }
      res.send(errMessage);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
