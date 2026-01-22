const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

async function connectDB() {
  await client.connect();
  console.log("✅ MongoDB connected (Docker)");
  return client.db(process.env.DB_NAME);
}

module.exports = connectDB;