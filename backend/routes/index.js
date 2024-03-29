var express = require('express');
var router = express.Router();
var queries = require('../db/users')


router.get('/', (req, res, next) => {
    res.status(200).send({ response: "Hello World!" });
})

router.post('/login', async (req, res, next) => {
    let body = req.body;

    let username = body.username;

    let user = await queries.getUser(username);

    let exists = (user) ? true : false;

    if (exists) {
        return res.status(200).send(user);
    } else {
        try {
            body.favouriteRecipes = [];
            let newUser = await queries.createUser(body);
            return res.status(200).send(newUser);
        } catch (e) {
            return res.status(400).send(e);
        }
    }
});

router.post('/logout', async (req, res, next) => {
    // Nothing needs to happen here bc no auth, frontend needs to reset user

    return res.status(200).body(true);
})

module.exports = router;