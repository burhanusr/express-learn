const { Sequelize, DataTypes } = require('sequelize');
const config = require('./../../config/database');

const sequelize = new Sequelize(config);
const db = {};

sequelize
  .authenticate()
  .then(() => console.log('DB connected..'))
  .catch((err) => console.log(err.message));

db.Sequelize = Sequelize; // constructor
db.sequelize = sequelize; // instance

db.userModel = require('./userModel')(sequelize, DataTypes);
db.productModel = require('./productModel')(sequelize, DataTypes);

module.exports = db;
