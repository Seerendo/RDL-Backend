const db = require('../models/index');
const { Op } = require('sequelize');
const Unit = db['unit'];

//Listar todas las unidades
const getUnits = async (req, res) => {
  const units = await Unit.findAll();
  res.json(units);
};

//Filtrar unidad por descripción
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

//Crear unidad
const createUnit = async (req, res) => {
  const units = await Unit.create({
    description: req.body.description,
    active: req.body.active,
  });
  res.json(units.dataValues);
};

//Crear lote de unidades
const createMultiUnits = async (req, res) => {
  const unit = await Unit.bulkCreate(req.body);
  res.send(unit.length + ' Datos Ingresados');
};

module.exports = {
  getUnits,
  getUnitByDescription,
  createUnit,
  createMultiUnits,
};
