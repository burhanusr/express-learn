require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_MONGOOSE.replace(
  '<PASSWORD>',
  process.env.DB_MONGOOSE_PASSWORD
);

mongoose
  .connect(url)
  .then(() => console.log('Mongoose Connected'))
  .catch((err) => console.log('Mongoose Error: ', err));
