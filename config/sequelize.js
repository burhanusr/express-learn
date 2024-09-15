require('dotenv').config();

module.exports = {
  username: process.env.DB_MYSQL_USERNAME,
  password: process.env.DB_MYSQL_PASSWORD,
  database: process.env.DB_MYSQL_NAME,
  host: process.env.DB_MYSQL_HOST,
  dialect: 'mysql',
};
