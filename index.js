const express = require('express');

require('express-async-errors');

const route = require('./app/routes');

const error = require('./app/middlewares/error');

const app = express();

app.use(express.json());
app.use(route);
app.use(error);

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
