var mongoose = require("mongoose");
const mongoUri = `mongodb://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@ds247569.mlab.com:47569/customer-cycle-auth`;
