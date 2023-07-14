var express = require('express');
var router = express.Router();
const queries = require('../db/users');

var favouriteRecipes = require('./favouriteRecipes');

router.get('/', (req, res, next) => {
    return res.status(200).send({ response: "Hello User!" });
});

// Get user information
router.get('/info/:username', async (req, res, next) => {
    let username = req.params.username;

    let user;

    // TODO: populate user info
    user = await queries.getUser(username);

    return res.status(200).send(user);
});

// Create user
router.post('/create', async (req, res, next) => {
    let user = req.body;
    let username = user.username;

    //TODO: check if user already exists
    let userExist = await queries.getUser(username);

    if (userExist) {
        return res.status(400).send({ error: "User already exists" });
    }

    try {
        await queries.createUser(user);
    } catch (e) {
        // TODO: do error handling (not sure what errors can pop up)
    }

    return res.status(200).send(user)
});

router.patch('/update', async (req, res, next) => {
    let user = req.body;
    let username = user.username;

    //TODO: check if user already exists (not sure if needed as update would be for existing users)
    let userExist = await queries.getUser(user.username);

    if (!userExist) {
        return res.status(400).send({ error: "User doesn't exist" });
    }

    await queries.updateUser(username, user);

    //TODO: try to patch in db + error handling. (find by username and patch entire user into db), return full user?

    return res.status(200).send(user);
});


router.use('/favouriteRecipes', favouriteRecipes);

module.exports = router;