const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
    phoneSchema.findOne({_id: req.params.id}).exec()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json({ message: error }));
  };