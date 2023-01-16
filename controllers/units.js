const { Units } = require('../config/config');
const { Op } = require('sequelize');

const getUnits = async (req, res) => {
  const units = await Units.findAll();
  res.json(units);
};

const getUnitByDescription = async (req, res) => {
  const units = await Units.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.unit + '%',
      },
    },
  });
  if (units) {
    res.json(units);
  } else {
    res.send('No se encontró el dato' + req.body);
  }
};

const createUnit = async (req, res) => {
  const units = await Units.create({
    description: req.body.unit,
    active: req.body.active,
  });
  res.json(units.dataValues);
};

module.exports = {
  getUnits,
  getUnitByDescription,
  createUnit,
};
