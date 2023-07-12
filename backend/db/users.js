let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;

const connectionURI = process.env.connectionURI || "";
const dbName = process.env.dbName || "";
const collectionName = "User";

const client = new MongoClient(connectionURI);
var db = client.db(dbName);
const collection = db.collection(collectionName);

const queries = {
    addUser: async function (user) {
        // TODO: Add user
        return user;
    }
}

module.exports = queries;