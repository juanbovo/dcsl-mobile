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
    maxlength: 30,
  },
  description: {
    type: String,
    maxlength: 250,
  },
  color: {
    type: String,
    maxlength: 30,
  },
  price: {
    type: Number,
    required: true,
  },
  imageFilePath: {
    type: String,
    required: true,
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