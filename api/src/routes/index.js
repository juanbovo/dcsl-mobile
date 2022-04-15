const { Router } = require("express");
const router = Router();

// Routes
const getPhones = require("./get-phones.routes");
const getPhoneDetails = require("./get-phone-details.routes")
const createPhone = require("./create-phone.routes");
const deletePhone = require("./delete-phone.routes");

router.get("/", (req, res) => {
  res.send("API root dir, nothing to see here ^_^");
});
router.get("/phones", getPhones);
router.get("/phones/:id", getPhoneDetails);
router.post("/phones", createPhone);
router.delete("/phones/:id", deletePhone);

module.exports = router;
