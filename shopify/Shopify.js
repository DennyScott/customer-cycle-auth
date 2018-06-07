var mongoose = require("mongoose");
var ShopifySchema = new mongoose.Schema({
  shopifyId: String,
  userId: Schema.Types.ObjectId
});

mongoose.model("Shopify", ShopifySchema);

module.exports = mongoose.model("Shopify");
