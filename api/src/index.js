const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const routes = require("./routes");

// DB
const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log("DCSL Phone Catalog API running in port", app.get("port"));
});

process.on('SIGINT', () => {
    console.log('DCSL Phone Catalog API shutting down, disconnecting from db...')
    mongoose.disconnect()
    process.exit(0)
})
