const express = require('express');

const homeRouter = require('./routes/homeRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/', homeRouter);
app.use('/api/v1/user', userRouter);

// SERVER RUNNING
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
