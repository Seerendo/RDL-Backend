const { Sequelize } = require('sequelize');
const { Frecuency } = require('../models/index');
const { development, testing } = require('./config');

const database = testing;

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: 'mysql',
  }
);

sequelize.sync({ force: true }).then(() => {
  console.log('Sincro Exitosa!');
});

module.exports = sequelize;
