//////////////////////////////////////////////
//////// Import Dependencies
///////////////////////////////////////////////
const express = require("express"); // bring this in so we can make our router
const Recipe = require("../models/recipe");

/////
// Create Router  variable to attach rooutes
/////

const router = express.Router();

/////////////
///// export this router to use in other files
//////////////
module.exports = router;
