var express = require('express');
var router = express.Router();
const queries = require('../db/users');

var favouriteRecipes = require('./favouriteRecipes');

router.get('/', (req, res, next) => {
    return res.status(200).send({ response: "Hello User!" });
});

router.get('/info/:username', async (req, res, next) => {
    let username = req.params.username;

    let user;

    user = await queries.getUser(username);

    return res.status(200).send(user);
});

router.post('/create', async (req, res, next) => {
    let user = req.body;
    let username = user.username;

    let userExist = await queries.getUser(username);

    if (userExist) {
        return res.status(400).send({ error: "User already exists" });
    }

    await queries.createUser(user);

    return res.status(200).send(user)
});

router.patch('/update', async (req, res, next) => {
    let user = req.body;
    let username = user.username;

    let userExist = await queries.getUser(user.username);

    if (!userExist) {
        return res.status(400).send({ error: "User doesn't exist" });
    }

    await queries.updateUser(username, user);

    return res.status(200).send(user);
});


router.use('/favouriteRecipes', favouriteRecipes);

module.exports = router;