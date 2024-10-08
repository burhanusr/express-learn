const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'field nama harus ada'],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    max: 10000000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
