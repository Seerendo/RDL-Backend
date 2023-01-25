const { Sequelize } = require('sequelize');
const { database } = require('./config');
const { ParamSeeder, ProcessSeeder, UnitSeerder } = require('../seeders/index');
const { Param, Unit, Process } = require('../models/index');

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
  /* .then(() => {
    ParamSeeder.forEach((param) => Param.create(param));
    console.log('Parámetros Cargados');
  })
  .then(() => {
    ProcessSeeder.forEach((process) => Process.create(process));
    console.log('Procesos Cargados');
  })
  .then(() => {
    UnitSeerder.fotEach((unit) => Unit.create(unit));
    console.log('Unidades Cargadas');
  }); */

module.exports = sequelize;
