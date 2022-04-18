const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
  const {
    body: {
      name,
      manufacturer,
      description,
      color,
      price,
      imageFilePath,
      screen,
      storage,
      ram,
    },
  } = req;
  try {
    const phone = phoneSchema({name, manufacturer, description, color, price, imageFilePath, screen, storage, ram});
    phone
      .save()
      .then(() => res.status(201).json({ message: "Phone correctly added to DB" }))
      .catch((error) => res.status(400).json({ message: error }));
  } catch {
    res.status(400).json({ message: error })
  }
};
