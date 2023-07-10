require('dotenv').config();
var express = require('express');
var router = express.Router();

const connectionURI = process.env.connectionURI || "";
const dbName = process.env.dbName || "";
const collectionName = "Recipes";

const client = new MongoClient(connectionURI);
var db = client.db(dbName);
const collection = db.collection(collectionName);

router.get('/', async (req, res, next) => {
    res.status(200).send(await collection.find().toArray());
})

module.exports = router;