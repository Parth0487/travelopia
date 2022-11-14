var express = require("express");
var router = express.Router();
var userController = require("../src/controllers/user.controller");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// As there are no any login routes, we do not need middleware here.

router.post("/addRecord", userController.addRecord);
router.get("/getRecords", userController.getRecords);

module.exports = router;
