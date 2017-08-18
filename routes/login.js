var express = require("express");
var router = express.Router();

//testing to see if I get anything on the page
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
