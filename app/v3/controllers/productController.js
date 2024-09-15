const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      result: products.length,
      data: products,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const doc = await Product.findById(req.params.id);

    console.log(doc);

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const doc = await Product.create(req.body);

    console.log(doc);

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return new document
      runValidators: true,
    });

    res.status(201).json({
      status: 'success',
      data: doc,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};
