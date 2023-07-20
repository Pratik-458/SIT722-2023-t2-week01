var express = require("express");
var router = express.Router();
const namelist = [
  { id: 1, name: "John" },
  { id: 2, name: "James" },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    subheading: "sit722",
    names: namelist,
  });
});

module.exports = router;
