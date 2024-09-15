const db = require('./../models');

const Product = db.productModel;

exports.checkId = async (req, res, next, val) => {
  const product = await Product.findAll({});

  if (Number(req.params.id) > product.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({});

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
    const id = Number(req.params.id);
    const product = await Product.findOne({ where: { id: id } });

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
    const product = await Product.create(req.body);
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
    const product = await Product.update(req.body, { where: { id: id } });

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
    await Product.destroy({ where: { id: id } });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};
