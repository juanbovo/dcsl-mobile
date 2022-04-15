const phoneSchema = require("../models/phone");

module.exports = (req, res) => {
  phoneSchema.find({}).sort({ _id: "desc" }).exec()
    .then((data) => {
      data.forEach((phone) => {
        phone.id = phone._id;
        delete phone._id;
      });
      res.status(200).json(data);
    })
    .catch((error) => res.status(400).json({ message: error }));
};
