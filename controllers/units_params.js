const { UnitParam } = require('../config/config');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const getUnitsParams = async (req, res) => {
  const unitsParams = await sequelize.query(
    'SELECT p.description, u.description FROM params p INNER JOIN units_params up ON p.param_id = up.param_id INNER JOIN units u ON up.unit_id = u.unit_id'
  );
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
