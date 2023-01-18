const { UnitParam } = require('../config/config');
const { Op } = require('sequelize');

const getUnitsParams = async (req, res) => {
  const unitsParams = await UnitParam.findAll();
  res.json(unitsParams);
};

const createUnitsParams = async (req, res) => {
  const unitsParams = await UnitParam.create({
    param_id: req.body.param_id,
    unit_id: req.body.unit_id,
    active: req.body.active,
  });
  res.json(unitsParams.dataValues);
};

module.exports = {
  getUnitsParams,
  createUnitsParams,
};
