var express = require("express");
var router = express.Router();
const questionsController = require("../controllers/questions.controller");

/* GET home page. */
router.route("/").get(questionsController.get);

// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Question List" });
// });

module.exports = router;
