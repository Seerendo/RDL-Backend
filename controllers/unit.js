const { Unit } = require('../models/index');
const { Op } = require('sequelize');

const getUnits = async (req, res) => {
  const units = await Unit.findAll();
  res.json(units);
};

const getUnitByDescription = async (req, res) => {
  const units = await Unit.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.description + '%',
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
  const units = await Unit.create({
    description: req.body.description,
    active: req.body.active,
  });
  res.json(units.dataValues);
};

module.exports = {
  getUnits,
  getUnitByDescription,
  createUnit,
};
