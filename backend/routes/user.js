require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

const connectionURI = process.env.connectionURI || "";
const dbName = process.env.dbName || "";
const collectionName = "User";

console.log("hi" + connectionURI); 
const client = new MongoClient(connectionURI);
var db = client.db(dbName);
const collection = db.collection(collectionName);

router.get('/', (req, res, next) => {
    res.status(200).send({ response: "Hello User!" });
})

module.exports = router;