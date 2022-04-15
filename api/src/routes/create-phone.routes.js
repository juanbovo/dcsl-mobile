const https = require("https");
const phoneSchema = require("../models/phone");

function doCreatePhone(req, res) {
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

  const phone = phoneSchema({name, manufacturer, description, color, price, imageFilePath, screen, storage, ram});

  phone
    .save()
    .then(() =>
      res.status(201).json({ message: "Phone correctly added to DB" })
    )
    .catch((error) => res.status(400).json({ message: error }));
}

module.exports = (req, res) => {
  if (!req.body.imageFilePath) {
    https.get(`https://api-mobilespecs.azharimm.site/v2/search?query=${req.body.name}`,
      (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
        data += chunk;
        });

        resp.on("end", () => {
        const imageString = JSON.parse(data).data.phones[0].image;
        req.body.imageFilePath = imageString;
        doCreatePhone(req, res);
        });
      }
    )
    .on("error", (err) => {
    console.log("Error: " + err.message);
    });
  } else {
    doCreatePhone(req, res);
  }
};
