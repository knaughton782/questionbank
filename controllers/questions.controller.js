const Questions = require("../models/questions.model");

exports.get = function(req, res, next) {
  Questions.find({})
    .sort({ updatedAt: "desc" })
    .limit(25)
    .exec(function(err, payload) {
      //this should return our query info
      if (err) next(err);
      res.render("questionList", {
        questions: payload,
        title: "Questions List"
      });
    });
};
