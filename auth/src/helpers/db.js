const mongoose = require("mongoose");
const { db } = require("../configuration");

function connectDb() {
  mongoose.connect(db, { useNewUrlParser: true });

  return mongoose.connection;
}

module.exports = {
  connectDb,
};
