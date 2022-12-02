// Import
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4500;

// Create express application
const app = express();

// establish mongo connection
const MONGO_URL = process.env.MONGO_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// mongoose connection events
mongoose.connection
  .on("open", () => console.log("Mongoose Connected"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log("Mongoose Error", error));

// Register middleware
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Routes and Routers
app.get("/", (req, res) => {
  res.send("<h1>Server is working</h1>");
});

// Start the server (listener)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
