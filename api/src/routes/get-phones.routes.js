const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
  try {
    phoneSchema.find({}).sort({ _id: "desc" }).exec()
    .then((data) => res.status(200).json(data))
    .catch(({ message }) => res.status(400).json({ error: message }))
  } catch ({ message }) {
    res.status(400).json({ error: message })
  }
};
