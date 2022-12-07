//////////////////////////////////////////////
//////// Import Dependencies
///////////////////////////////////////////////

const express = require("express"); // bring this in so we can make our router
const Recipe = require("../models/recipe");

/////
// Create Router  variable to attach rooutes
/////

const router = express.Router();

//////////////////////////////////////////////
//////// Routes
///////////////////////////////////////////////
router.get("/seed", (req, res) => {});

router.get("/", (req, res) => {
Recipe.find({})
.then((recipe) => {
    res.render("recipes/index.ejs", {recipe})
})
.catch((error) => console.log(error))
})

/////////////
///// export this router to use in other files
//////////////
module.exports = router;
