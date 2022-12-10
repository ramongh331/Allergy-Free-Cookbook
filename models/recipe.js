//////////////////////////////////////////////
//////// Fruits Model
///////////////////////////////////////////////
const mongoose = require("./connection");

const { Schema, model } = mongoose;

const recipesSchema = new Schema({
  name: String,
  image: String,
  ingredients: [String],
  instructions: [String],
  difficulty: String,
  allergyFree: {
    gluten: Boolean,
    dairy: Boolean,
    treeNut: Boolean,
    egg: Boolean,
    nuts: Boolean,
    fish: Boolean,
    shellfish: Boolean,
    soy: Boolean,
    sesameSeeds: Boolean,
    vegan: Boolean,
    vegetarian: Boolean,
    keto: Boolean,
  },
  //  username: String,
});

const Recipe = model("Recipe", recipesSchema);

module.exports = Recipe;
