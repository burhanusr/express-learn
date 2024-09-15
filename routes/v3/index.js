const express = require('express');
const productRouter = require('./productRoutes');
// const userRouter = require('./userRoutes');

const router = express.Router();

// router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router;
