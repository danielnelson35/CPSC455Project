import db from 'mongodb/mongoUtil';
var express = require('express');
var router = express.Router();

const collectionName = "Recipes";
const collection = db.collection(collectionName);

router.get('/', async (req, res, next) => {
    res.status(200).send(await collection.find().toArray());
})

module.exports = router;