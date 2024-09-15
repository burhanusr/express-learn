const express = require('express');
const productController = require('./../../app/v1/controllers/productController');

const router = express.Router();

router.param('id', productController.checkId);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
