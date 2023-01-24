const { Param, Unit } = require('../models/index');

const getUnitByParam = async (req, res) => {
  const getUnitParam = await Param.findAll({
    include: [
      {
        model: Unit,
        required: true,
        attributes: ['unit_id', 'description', 'active'],
      },
    ],
  });
  res.json(getUnitParam);
};

const createUnitParam = async (req, res) => {};

module.exports = { getUnitByParam };
