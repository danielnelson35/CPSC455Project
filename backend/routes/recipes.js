var express = require('express');
var router = express.Router();

const connectionURI = "mongodb+srv://teamrecipe:TeamRecipeDB1@sandbox.ykog5qj.mongodb.net/?retryWrites=true&w=majority";
const dbName = "TeamRecipe";
const collectionName = "Recipes";

const client = new MongoClient(connectionURI);
var db = client.db(dbName);
const collection = db.collection(collectionName);

router.get('/', async (req, res, next) => {
    res.status(200).send(await collection.find().toArray());
})

module.exports = router;