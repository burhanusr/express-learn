require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_MONGO.replace(
  '<PASSWORD>',
  process.env.DB_MONGO_PASSWORD
);

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('MongoDB: ', err));

const db = client.db('express-learn');

module.exports = db;
