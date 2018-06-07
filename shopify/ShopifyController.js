var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Shopify = require("./Shopify");

// Creates a new Shopify Object
router.post("/", function(req, res) {
  Shopify.create(
    {
      userId: req.body.userId,
      shopifyId: req.body.shopifyId
    },
    function(err, shopify) {
      if (err)
        return res
          .status(500)
          .send("There was a problem creating the shopify object");
      res.status(200).send(shopify);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get("/", function(req, res) {
  Shopify.find({}, function(err, shopify) {
    if (err)
      return res.status(500).send("There was a problem finding the shopify.");
    res.status(200).send(shopify);
  });
});

// GETS A SINGLE Shopify FROM THE DATABASE
router.get("/:id", function(req, res) {
  Shopify.findById(req.params.id, function(err, shopify) {
    if (err)
      return res.status(500).send("There was a problem finding the shopify.");
    if (!shopify) return res.status(404).send("No shopify found.");
    res.status(200).send(shopify);
  });
});

// DELETES A Shopify FROM THE DATABASE
router.delete("/:id", function(req, res) {
  Shopify.findByIdAndRemove(req.params.id, function(err, shopify) {
    if (err)
      return res.status(500).send("There was a problem deleting the shopify.");
    res.status(200).send("shopify: " + shopify.shopifyId + " was deleted.");
  });
});

// UPDATES A SINGLE Shopify IN THE DATABASE
router.put("/:id", function(req, res) {
  Shopify.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    shopify
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the shopify.");
    res.status(200).send(shopify);
  });
});

module.exports = router;
