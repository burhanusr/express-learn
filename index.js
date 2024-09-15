const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const homeRouter = require('./routes/homeRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

// middlewares
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/', homeRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

// SERVER RUNNING
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
