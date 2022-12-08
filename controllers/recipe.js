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

// Index Route
router.get("/", (req, res) => {
Recipe.find({})
.then((recipe) => {
    res.render("recipes/index.ejs", {recipe})
})
.catch((error) => console.log(error))
})

// New Route
router.get("/new", (req, res) => {
    res.render("recipes/new.ejs");
   });
   
// Update Route

// Show Route
router.get("/:id", (req, res) => {
    Recipe.findById(req.params.id).then((recipe) => {
      res.render("recipes/show.ejs", { recipe });
    })
    .catch((error) => console.log(error))
   });
   

/////////////
///// export this router to use in other files
//////////////
module.exports = router;
