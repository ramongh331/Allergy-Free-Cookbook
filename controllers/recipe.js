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
   
// Create Route
router.post("/", (req, res) => {
    // check if the checkboxes should be true or false
    req.body.allergyFree.gluten = req.body.allergyFree.gluten === "on" ? true : false;
    req.body.allergyFree.dairy = req.body.allergyFree.dairy === "on" ? true : false;
    req.body.allergyFree.treeNut = req.body.allergyFree.treeNut === "on" ? true : false;
    req.body.allergyFree.egg = req.body.allergyFree.egg === "on" ? true : false;
    req.body.allergyFree.nuts = req.body.allergyFree.nuts === "on" ? true : false;
    req.body.allergyFree.fish = req.body.allergyFree.fish === "on" ? true : false;
    req.body.allergyFree.shellfish = req.body.allergyFree.shellfish === "on" ? true : false;
    req.body.allergyFree.soy = req.body.allergyFree.soy === "on" ? true : false;
    req.body.allergyFree.sesameSeeds = req.body.allergyFree.sesameSeeds === "on" ? true : false;
    req.body.allergyFree.vegan = req.body.allergyFree.vegan === "on" ? true : false;
    req.body.allergyFree.vegetarian = req.body.allergyFree.vegetarian === "on" ? true : false;
    req.body.allergyFree.keto = req.body.allergyFree.keto === "on" ? true : false;
    console.log(req.body, "this is the form before submission")


    Recipe.create(req.body, (err, createdRecipe) => {
      
      console.log("created", createdRecipe);
      res.redirect("/recipes");
    });
   });
   
// Edit Route
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  // Find the recipe and send it to the edit.ejs to prepopulate the form
  Recipe.findById(id, (err, foundRecipe) => {
    res.render("recipes/edit.ejs", { recipe: foundRecipe });
  });
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
