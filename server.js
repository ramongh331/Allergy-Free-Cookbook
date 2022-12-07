//////////////////////////////////////////////
//////// Import Dependencies
///////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4500;
const RecipeRouter = require("./controllers/recipe");
const UserRouter = require("./controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// Create express application
const app = express();
//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/recipes", RecipeRouter);
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

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

// Start the server (listener)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
