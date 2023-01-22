const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./router/index');
const app = express();

const sequelize = require('./config/db');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

require('./config/config');

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('La app ha arrancado en http://localhost:3000');

  sequelize.authenticate().then(() => {
    console.log('Nos hemos conectado a la base de datos');
  }).catch(error => {
    console.log('Se ha producido un error', error);
  });
});
