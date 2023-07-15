var express = require('express');
var router = express.Router();
const queries = require('../db/users');

router.post('/add', async (req, res, next) => {
    let body = req.body;
    let username = body.username;
    let recipe = body.recipe;

    if (!recipe) {
        return res.status(400).send({ error: "Recipe must not be empty" });
    }

    // TODO: do some validation + add to db
    recipe = await queries.addRecipe(username, recipe);

    return res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(recipe);
});

router.get('/all/:username', async (req, res, next) => {
    let username = req.params.username;

    let recipes = await queries.getRecipes(username);

    // TODO: Get all favourite recipes from user

    return res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(recipes);
});

router.get('/random/:username', async (req, res, next) => {
    let username = req.params.username;

    let recipes = await queries.getRecipes(username);

    // TODO: Get all favourite recipes from user. (Does mongo have its own get random?)

    let recipe = recipes[Math.floor(Math.random() * recipes.length)]; // Maybe this should be moved to a util function

    return res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(recipe);
});

router.delete('/delete', async (req, res, next) => {
    let body = req.body;
    let username = body.username;
    let recipename = body.recipename;

    // TODO: Delete recipe from user + error handling
    let numChanged = await queries.deleteRecipe(username, recipename);

    return res.status(200).send({ recipesDeleted: numChanged });
})

module.exports = router;