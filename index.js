require('./config/mongoose');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const homeRouter = require('./routes/homeRoutes');
// const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');
const v3Router = require('./routes/v3');

const app = express();

// middlewares
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/', homeRouter);
// app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
app.use('/api/v3', v3Router);

// SERVER RUNNING
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
