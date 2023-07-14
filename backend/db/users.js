require('dotenv').config();
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;

const connectionURI = process.env.connectionURI || "";
const dbName = process.env.dbName || "";
const collectionName = "User";

const client = new MongoClient(connectionURI);
var db = client.db(dbName);

const queries = {
    getUser: async function (username) {
        const user = await db.collection(collectionName).findOne({username: username});
        return user;
    },
    createUser: async function (user) {
        await db.collection(collectionName).insertOne(user);
        return user;
    },
    updateUser: async function (username, user) {
        await db.collection(collectionName).replaceOne({username: username}, user);
        return user;
    },
    getRecipes: async function (username) {
        const user = await db.collection(collectionName).findOne({username: username});
        const recipes = user.favouriteRecipes;
        return recipes;
    },
    addRecipe: async function (username, recipe) {
        await db.collection(collectionName).updateOne({ username: username },
                                                      { $push: { favouriteRecipes: recipe } });
        return recipe;
    },
    deleteRecipe: async function (username, recipename) {
        await db.collection(collectionName).updateOne({ username: username },
                                                      { $pull: { favouriteRecipes: {title: recipename} } });
        return recipename;
    }
}

module.exports = queries;