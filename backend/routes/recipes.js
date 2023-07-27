const fetch = require('node-fetch');

var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
    const recipe = await getAPIRecipe();
    return res.status(200).send(recipe);
})

router.get('/ingredients', async (req, res, next) => {

})

router.get('/restrictions', async (req, res, next) => {

})

router.get('/filter', async (req, res, next) => {
    let filters = req.params;
    let ingredients = filters.ingredients;
    let restrictions = filters.restrictions;
    const recipe = await getAPIRecipe();
    return res.status(200).send(recipe);
})

const getAPIRecipe = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET'
    });
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