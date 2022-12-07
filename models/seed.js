require('dotenv').config()
const mongoose = require('./connection')
const Recipe = require('./recipe')
 
 
mongoose.connection.on('open', () => {
 
   // define data we want to put in the database
   const startingRecipes =  [
       { name: "Mexican Lasagna", 
       ingredients: [
        "1 pound of turkey or beef", 
        "1 medium onion chopped",
        "1 tablespoon gluten free taco seasoning",
        "1/3 cup of water",
        "1 15-ounce can of black beans",
        "1 16-ounce jar tomato salsa",
        "1 9-ounce bag frozen corn",
        "6-8 corn tortillas",
        "1 cup Dairy free cheese"
    ], 
    instructions: [
        "Preheat the oven to 375° F.", 
        "Brown the ground turkey in a skillet until no longer pink. Add the onion and cook until translucent. Add the taco seasoning and water. Stir in the beans, salsa, and corn and cook over medium heat until bubbling.",
        "Spoon 1 and a half cups of the turkey mixture into the bottom of an 8x8 inch baking dish. Top with 2 whole tortillas and one tortilla cut in half so that the whole pan is covered. Spoon another 1-½ cups of the turkey mixture on top and sprinkle with ½ cup cheese. Cover with more tortillas and repeat again with the meat mixture and cheese.",
        "Cover with aluminum foil and bake at 375° F for 25-30 minutes. Uncover and allow to sit for 5 minutes before serving. Serve with a dollop of dairy free sour cream if desired."        
    ],
    allergyFree:{
    gluten: true,
    dairy: true,
    treeNut: false,
    egg: false,
    nuts: false,
    fish: false,
    shellfish: false,
    soy: false,
    sesameSeeds: false,
    vegan: false,
    vegetarian: false,
    keto: false
    }},
    { name: "Nachos", 
    ingredients: [
     "1 5.5-oz. bag Beanfields Black Bean chips", 
     "1 8-oz. bag Follow Your Heart Fiesta Blend Shreds",
     "1/2 cup cooked black beans",
     "1/2 cup Ro-Tel tomatoes with serrano peppers, drained",
     "1 small Hass avocado, chopped",
     "1/3 cup chopped scallions",
     "1/3 cup chopped fresh cilantro",
     "Cholula hot sauce"
 ], 
 instructions: [
     "Turn on oven to broil. Place chips in a glass or metal pie pan. Scatter half of 'cheese' shreds evenly over top. Layer on black beans and tomatoes, then remaining shreds.", 
     "Place pan under broiler, not too close, and watch carefully until “cheese” starts to melt and tips of chips get crispy.",
     "Remove from broiler, scatter avocado, scallions, and cilantro on top, and serve immediately with Cholula on the side."       
 ],
 allergyFree:{
 gluten: true,
 dairy: false,
 treeNut: false,
 egg: false,
 nuts: false,
 fish: false,
 shellfish: false,
 soy: false,
 sesameSeeds: false,
 vegan: true,
 vegetarian: false,
 keto: false
 }},
     ]
    
     // Delete all recipes
     Recipe.deleteMany({}, (err, data) => {
       // Create new recipes once old recipes are deleted
       Recipe.create(startingRecipes, (err, data) =>{
           console.log(data)
       })
     })
})
