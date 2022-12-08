//////////////////////////////////////////////
//////// Import Dependencies
///////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 4500;
const RecipeRouter = require("./controllers/recipe");
const Morgan = require("morgan")
// const UserRouter = require("./controllers/user");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

const app = express();

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////
app.use(Morgan("dev"))
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
// app.use(
//   session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
//     saveUninitialized: true,
//     resave: false,
//   })
// );

app.use("/recipes", RecipeRouter);
// app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.render("../views/recipes/landing.ejs");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
