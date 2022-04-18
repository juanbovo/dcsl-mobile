const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
  try {
    phoneSchema.deleteOne({ _id : req.params.id })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json({ message: error }));
  } catch {
    res.status(400).json({ message: error });
  }
};