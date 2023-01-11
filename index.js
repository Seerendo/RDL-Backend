const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./router/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/config');

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Servidor arrancando');
});
