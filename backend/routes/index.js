var express = require('express');
var router = express.Router();
var queries = require('../db/users')


router.get('/', (req, res, next) => {
    res.status(200).send({ response: "Hello World!" });
})

router.post('/login', async (req, res, next) => {
    let body = req.body;

    let username = body.username;

    //TODO: check if user exists and login else
    let user = await queries.getUser(username); // TODO: error handling

    let exists = (user) ? true : false;

    if (exists) {
        return res.status(200).send(user);
    } else {
        return res.status(400).send({ error: "User doesn't exist" });
    }
});

router.post('/logout', async (req, res, next) => {
    // Nothing needs to happen here bc no auth, frontend needs to reset user

    return res.status(200).body(true);
})

module.exports = router;