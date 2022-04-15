const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("MongoDB DCSL Phone Catalog connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
