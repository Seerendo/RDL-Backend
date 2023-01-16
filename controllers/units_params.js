const { UnitParams, Units } = require('../config/config');
const { Op } = require('sequelize');

const getUnitsParams = async (req, res) => {
  const unitsParams = await UnitParams.findAll();
  res.json(unitsParams);
};

const getUnitParamsByParamId = async (req, res) => {
  const unitsParams = await UnitParams.findAll({
    where: {
      id_param: req.body.id_param,
    },
  });
};

module.exports = {
  getUnitsParams,
};
