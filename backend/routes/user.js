import db from 'mongodb/mongoUtil';
var express = require('express');
var router = express.Router();

const collectionName = "User";
const collection = db.collection(collectionName);

router.get('/', (req, res, next) => {
    res.status(200).send({ response: "Hello User!" });
})

module.exports = router;