const { Param } = require('../config/config');
const { Op } = require('sequelize');
const {
  paramsFQ,
  paramsC,
  paramsF,
  paramsI,
  paramsM,
} = require('../seeders/params');

const migrationFQ = async (req, res) => {
  for (const paramFQ of paramsFQ) {
    console.log(paramFQ.Description);
  }

  /*   const param = await Param.create({
    description: req.body.param,
    cuali: req.body.cuali,
    active: req.body.active,
    field: req.body.field,
  });
  res.json(param.dataValues); */
};

module.exports = { migrationFQ };
