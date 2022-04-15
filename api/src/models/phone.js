const mongoose = require("mongoose");
const { Schema } = mongoose;

const phoneSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  manufacturer: {
    type: String,
    required: true,
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  color: {
    type: String,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
  },
  imageFilePath: {
    type: String,
  },
  screen: {
    type: String,
    maxlength: 50,
  },
  storage: {
    type: Number,
  },
  ram: {
    type: Number,
  },
});

module.exports = mongoose.model('Phone', phoneSchema)