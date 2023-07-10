import db from 'mongodb/mongoUtil';
import { MongoClient } from 'mongodb';

const connectionURI = "mongodb+srv://teamrecipe:TeamRecipeDB1@sandbox.ykog5qj.mongodb.net/?retryWrites=true&w=majority";
const dbName = "TeamRecipe";

const client = new MongoClient(connectionURI);
const db = client.db(dbName);

export default db;