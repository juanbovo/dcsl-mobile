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
    maxlength: 20,
  },
  storage: {
    required: true,
    type: Number,
  },
  ram: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model('Phone', phoneSchema)