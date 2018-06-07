var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Auth = require("./Auth");

// CREATES A NEW USER
router.post("/", function(req, res) {
  Auth.create(
    {
      token: req.body.token,
      userId: req.body.userId,
      expires: req.body.expires
    },
    function(err, auth) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(auth);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/", function(req, res) {
  Auth.find({}, function(err, auth) {
    if (err)
      return res.status(500).send("There was a problem finding the auth.");
    res.status(200).send(auth);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get("/:id", function(req, res) {
  Auth.findById(req.params.id, function(err, auth) {
    if (err)
      return res.status(500).send("There was a problem finding the auth.");
    if (!auth) return res.status(404).send("No auth found.");
    res.status(200).send(auth);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete("/:id", function(req, res) {
  Auth.findByIdAndRemove(req.params.id, function(err, auth) {
    if (err)
      return res.status(500).send("There was a problem deleting the auth.");
    res.status(200).send("Auth: " + auth.token + " was deleted.");
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put("/:id", function(req, res) {
  Auth.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    auth
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the auth.");
    res.status(200).send(auth);
  });
});

module.exports = router;
