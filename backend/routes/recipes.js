const fetch = require('node-fetch');
require('dotenv').config();

var express = require('express');
const { URLSearchParams } = require('url');
var router = express.Router();

router.get('/', async (req, res, next) => {
    const recipe = await getAPIRecipe();
    return res.status(200).send(recipe);
})

router.get('/ingredients', async (req, res, next) => {
    let filters = req.query;
    let query = filters.query;

    let uri = `${process.env.filteredRecipeAPIURI}/food/ingredients/autocomplete?`;
    let params = new URLSearchParams({
        query: query,
        number: 5
    });
    const response = await fetch(uri + params,
        {
            method: 'GET',
            headers: {
                'x-api-key': process.env.spoonacularAPIKey
            }
        });
    if (response.status != 200) {
        return res.status(400).send({ error: "Something went wrong with the API call." });
    }

    return res.status(200).send(await response.json());
})

router.get('/restrictions', async (req, res, next) => {
    const intolerances = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];

    return res.status(200).send(intolerances);
})

router.get('/filter', async (req, res, next) => {
    let filters = req.query;
    let ingredientSearch = filters.ingredients;
    let restrictions = filters.restrictions;


    let uri = `${process.env.filteredRecipeAPIURI}/recipes/complexSearch?`;
    let params = new URLSearchParams({
        query: ingredientSearch.split(",")[0],
        includeIngredients: ingredientSearch,
        intolerances: restrictions,
        instructionsRequired: true,
        number: 20,
        sort: "random",
        sortDirection: "asc",
        addRecipeNutrition: false,
        addRecipeInformation: true,
        fillIngredients: true,
        instructionsRequired: true,
    });


    const response = await fetch(uri + params,
        {
            method: 'GET',
            headers: {
                'x-api-key': process.env.spoonacularAPIKey
            }
        });

    if (response.status != 200) {
        return res.status(400).send({ error: "Something went wrong with the API call." });
    }

    let json = await response.json();

    if (json.results.length === 0) {
        return res.status(400).send({ error: "Nothing was found, please try a different query." });
    }

    let recipe = json.results[0];

    let ingredients = recipe.extendedIngredients.map((ingredient) => ingredient.originalName);

    let directions = parseDirections(recipe.analyzedInstructions);

    let item = {
        title: recipe.title,
        image: recipe.image,
        ingredients: ingredients,
        directions: directions,
    }

    return res.status(200).send(item);
})

function parseDirections(recipeDirections) {
    let directions = "";
    for (let instruction of recipeDirections) {
        directions += `${instruction.name}:\n\n`
        for (let stepNumber in instruction.steps) {
            step = instruction.steps[stepNumber].step;
            num = +stepNumber + 1;
            directions += `${num}: ${step}\n\n`;
        }
        directions += "\n"
    }

    return directions;
}

const getAPIRecipe = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET'
    });
    console.log('response:', response);
    const responseData = await response.json();
    const data = responseData.meals[0];
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
            ingredientsList.push(`${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}`);
        } else {
            break;
        }
    }
    const item = {
        title: data.strMeal,
        image: data.strMealThumb,
        ingredients: ingredientsList,
        directions: data.strInstructions
    };
    return Promise.resolve(item);
};


module.exports = router;