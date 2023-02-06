const { Sequelize } = require('sequelize');
const { database } = require('./config');

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: 'mysql',
  }
);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Sincro Exitosa!');
  });

module.exports = sequelize;
