const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
  const { name, manufacturer, description, color, price, imageFilePath, screen, storage, ram } = req.body;
  try {
    phoneSchema.updateOne({ _id : req.params.id }, { name, manufacturer, description, color, price, imageFilePath, screen, storage, ram })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json({ message: error }));
  } catch {
    res.status(400).json({ error: message })
  }
};