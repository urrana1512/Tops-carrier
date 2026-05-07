// Mongo database connectivity

const { MongoClient } = require("mongodb"); // 1) impload mongodb
const url = "mongodb://localhost:27017/"; // 2) mongodb server path fix
const databaseName = "test"; // 3) our mongodb compass database name
const client = new MongoClient(url); // 4) Create object for connectivity

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("Customers_info");
}
module.exports = dbConnect;
