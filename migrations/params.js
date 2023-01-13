const { Param } = require('../config/config');
const { Op } = require('sequelize');
const {
  paramsFQ,
  paramsC,
  paramsF,
  paramsI,
  paramsM,
} = require('../seeders/params');

const paramsMigrations = async (req, res) => {
  /* //Migracion Fisicos Quimicos
  for (const paramFQ of paramsFQ) {
    const param = await Param.create({
      description: paramFQ.Description,
      cuali: 'false',
      active: 'true',
      field: 'FISICO & QUIMICO',
    });
  }

  //Migracion Contaminantes
  for (const paramC of paramsC) {
    const param = await Param.create({
      description: paramC.Description,
      cuali: 'false',
      active: 'true',
      field: 'CONTAMINANTE',
    });
  }

  //Migracion Funcionales
  for (const paramF of paramsF) {
    const param = await Param.create({
      description: paramF.Description,
      cuali: 'truee',
      active: 'true',
      field: 'FUNCIONAL',
    });
  }

  //Migracion Microbiologicos
  for (const paramM of paramsM) {
    const param = await Param.create({
      description: paramM.Description,
      cuali: 'false',
      active: 'true',
      field: 'MICROBIOLOGICO',
    });
  }

  //Migracion Instrumentales
  for (const paramI of paramsI) {
    const param = await Param.create({
      description: paramI.Description,
      cuali: 'false',
      active: 'true',
      field: 'INSTRUMENTAL',
    });
  } */
};

module.exports = paramsMigrations;
