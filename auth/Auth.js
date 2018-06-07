var auth = require("mongoose");
var AuthSchema = new mongoose.Schema({
  token: String,
  userId: Schema.Types.ObjectId,
  expires: Date
});
mongoose.model("Auth", AuthSchema);

module.exports = mongoose.model("Auth");
