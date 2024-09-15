const { ObjectId } = require('bson');

const db = require('./../../../config/mongodb');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.collection('products').find({}).toArray();

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
    const { id } = req.params;
    const product = await db
      .collection('products')
      .findOne({ _id: new ObjectId(id) });

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await db.collection('products').insertOne(req.body);
    res.status(201).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await db
      .collection('users')
      .updateOne({ _id: new ObjectId(id) }, { $set: req.body });

    res.status(201).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection('users').deleteOne({ _id: new ObjectId(id) });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};
